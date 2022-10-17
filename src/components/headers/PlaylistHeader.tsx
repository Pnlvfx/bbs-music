import { Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import React from 'react';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { BluGradient, DropdownIcon, PauseIcon, PlayIcon } from '../../config/SVG';
import { useAudioContext } from '../audio/AudioProvider';

const PlaylistHeader = (props: NativeStackHeaderProps) => {
    const {songs, playing} = useAudioContext();

  return (
    <View className='h-[200px] overflow-hidden relative'>
      <BluGradient className='absolute' />
      <View className='absolute mt-10'>
        <View className=''>
          <View className='rounded-full mx-4 my-2 w-9 h-9 flex-row items-center justify-center' style={{backgroundColor: 'rgba(24, 24, 24, 0.23)'}}>
            <TouchableWithoutFeedback onPress={(e) => {
              e.preventDefault();
              props.navigation.goBack();
            }}>
              <DropdownIcon className='rotate-90' />
            </TouchableWithoutFeedback>
          </View>
          <View className='mx-4'>
            <Text className='text-bbaby-text text-2xl font-bold'>Downloaded Songs</Text>
            <Text className='text-bbaby-text_darker leading-4 mt-1'>{songs.length} songs</Text>
          </View>
        </View>
      </View>
      <View className='bg-blue-400 absolute bottom-4 rounded-full p-4 right-4'>
        <TouchableOpacity onPress={() => {
          
        }}>
          {playing ? (
            <PauseIcon style={{fill: 'black'}} />
          ) : (
            <PlayIcon className='fill-black' />
          )}
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default PlaylistHeader;