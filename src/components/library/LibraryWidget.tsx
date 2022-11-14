import { View, Text, Image, TouchableHighlight } from 'react-native';
import React from 'react';
import { STATIC_URL } from '../../config/config';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useLibraryContext } from './LibraryProvider';

type LibraryWidget = {
  name: string
}

const LibraryWidget = ({name}: LibraryWidget) => {
  const navigation = useNavigation<NativeStackNavigationProp<LibraryStackNavigatorProps>>();
  const {likedSongs} = useLibraryContext();
  
  return (
    <TouchableHighlight onPress={() => {
      navigation.navigate('playlist')
    }}>
      <View className='flex-row items-center'>
        <Image className='w-[60px] h-[60px]' source={{uri: `${STATIC_URL}/images/icons/c18-art.jpeg`}} />
        <View className='ml-2'>
          <Text className='text-bbaby-text font-semibold'>{name}</Text>
          <View className='flex-row'>
            <Text className='text-bbaby-text_darker text-[12px] leading-5'>Playlist</Text>
            <Text className='text-bbaby-text_darker mx-1 text-[12px] leading-5'>•</Text>
            <Text className='text-bbaby-text_darker text-[12px] leading-5'>{likedSongs.length} songs</Text>
          </View>
        </View>
      </View>
    </TouchableHighlight>
  )
}

export default LibraryWidget;
