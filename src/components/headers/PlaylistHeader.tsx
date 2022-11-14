import { Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import React from 'react';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { BluGradient, DropdownIcon, PauseIcon, PlayIcon } from '../../config/SVG';
import { useAudioContext } from '../audio/AudioProvider';
import { useLibraryContext } from '../library/LibraryProvider';

const PlaylistHeader = (props: NativeStackHeaderProps) => {
    const {playing} = useAudioContext();
    const {likedSongs} = useLibraryContext();

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
      <View className='bg-blue-400 absolute bottom-4 rounded-full p-4 right-4'>
        <TouchableOpacity>
          {playing ? (
            <PauseIcon fill={'black'} />
          ) : (
            <PlayIcon fill={'black'} />
          )}
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default PlaylistHeader;