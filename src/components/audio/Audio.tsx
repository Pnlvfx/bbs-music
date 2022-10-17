import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import React, { useEffect } from 'react';
import { useAudioContext } from './AudioProvider';
import TrackPlayer, {State, useProgress} from 'react-native-track-player';
import { PauseIcon, PlayIcon } from '../../config/SVG';
import Slider from '@react-native-community/slider';
import { useCurrentTrack } from './hooks/useCurrentTrack';

const Audio = () => {
  const {setPlaying, currentSong, playing, songs, currentIndex} = useAudioContext();
  const progress = useProgress();
  const track = useCurrentTrack();
  
  useEffect(() => {
    if (!currentSong || !currentIndex) return;
    setPlaying(true);
    TrackPlayer.add(songs);
    TrackPlayer.skip(currentIndex)
    TrackPlayer.play();
  }, [currentSong, currentIndex]);

  const playPause = async () => {
    const state = await TrackPlayer.getState();
    if (state === State.Playing) {
      TrackPlayer.pause();
      setPlaying(false);
    }
    if (state === State.Paused) {
      TrackPlayer.play();
      setPlaying(true);
    }
  }

  if (!track?.artwork || !track.title || !track.artist || !track.duration) return null;

  return (
    <View className='absolute right-0 bottom-[96px] top-auto left-0 z-50 h-[57px] bg-[#0d0d4a] rounded-md mx-2'>
      <TouchableWithoutFeedback className='relative w-full h-full'>
        <View className='w-full h-full relative'>
          <View className='w-full h-full flex-row items-center'>
            <Image className='w-10 h-10 rounded-md ml-2' source={{uri: track.artwork.toString()}} />
            <View className='ml-2 max-w-[260px] inline-block flex-none overflow-hidden'>
              <Text className='text-bbaby-text leading-5 text-[13px]'>{track.title}</Text>
              <Text className='text-bbaby-text_darker leading-4 text-[12px]'>{track.artist}</Text>
            </View>
            <View className='flex-1 h-full items-end justify-center pr-4'>
              <TouchableWithoutFeedback style={{width: '100%', height: '100%'}} onPress={playPause}>
                {playing ? (
                  <PauseIcon className='w-6 h-6 fill-white' />
                ) : (
                  <PlayIcon className='w-6 h-6 fill-white' />
                )}
              </TouchableWithoutFeedback>
            </View>
          </View>
          <View className='absolute w-full h-0 flex-1 justify-end bottom-[-18px]'>
            <Slider
              minimumValue={0}
              maximumValue={track.duration}
              value={progress.position}
              thumbTintColor={'transparent'}
              minimumTrackTintColor={'white'}
              onSlidingComplete={TrackPlayer.seekTo}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Audio;
