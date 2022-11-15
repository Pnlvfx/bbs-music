import { Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import React, { useState } from 'react';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { BluGradient, DropdownIcon, PauseIcon, PlayIcon } from '../../config/SVG';
import { useAudioContext } from '../audio/AudioProvider';
import { useLibraryContext } from '../library/LibraryProvider';
import TrackPlayer, { State } from 'react-native-track-player';

const PlaylistHeader = (props: NativeStackHeaderProps) => {
    const [playingLiked, setPlayingLiked] = useState(false);
    const {setPlaying} = useAudioContext();
    const {likedSongs} = useLibraryContext();

    const playPause = async () => {
      try {
          const state = await TrackPlayer.getState();
          if (state === State.Playing) {
              await TrackPlayer.pause();
              setPlaying(false);
              return setPlayingLiked(false);
          }
          if (state === State.Paused || State.Ready || State.Connecting) {
              await TrackPlayer.play();
              setPlaying(true);
              return setPlayingLiked(true);
          }
      } catch (err) {
          console.log(err), 'PlayPauseLiked';
      }
  }

    const playLiked = async () => {
      try {
        if (!playingLiked) {
          await TrackPlayer.reset();
          await TrackPlayer.add(likedSongs);
        }
        await playPause();
      } catch (err) {
        console.log(err);
      }
    }

  return (
    <View className='h-[200px] overflow-hidden relative'>
      <BluGradient className='absolute' />
      <View className='absolute mt-11'>
        <View className=''>
          <View className='rounded-full mx-4 mb-2 mt-4 w-8 h-8 flex-row items-center justify-center z-50' style={{backgroundColor: 'rgba(24, 24, 24, 0.23)'}}>
            <TouchableWithoutFeedback
              onPress={() => {
                props.navigation.goBack();
              }}>
              <View className='h-full w-full z-50 items-center justify-center'>
                <DropdownIcon width={20} height={20} className='rotate-90' />
              </View>
            </TouchableWithoutFeedback>
          </View>
          <View className='mx-4'>
            <Text className='text-bbaby-text text-2xl font-bold'>Liked Songs</Text>
            <Text className='text-bbaby-text_darker leading-4 mt-1'>{likedSongs.length} songs</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity onPress={playLiked} className='bg-blue-400 absolute bottom-4 rounded-full right-4'>
        <View className='p-4'>
          {playingLiked ? (
            <PauseIcon fill={'black'} width={24} height={24} />
          ) : (
            <PlayIcon fill={'black'} width={24} height={24} />
          )}
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default PlaylistHeader;