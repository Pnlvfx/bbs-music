import React from 'react';
import { Text, View } from 'react-native';
import LibraryWidget from '../components/library/LibraryWidget';

const LibraryScreen = () => {
  return (
    <View className='w-full flex-1 px-4 mt-8'>
      <View testID='tocomplete' className='mb-[40px]'>

      </View>
      <View className='mt-2 mb-3'>
        <Text className='text-bbaby-text text-[13px] font-semibold mb-[6px]'>Recently played</Text>
      </View>
      <LibraryWidget name='Liked Songs' />
    </View>
  )
}

export default LibraryScreen;
