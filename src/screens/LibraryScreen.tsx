import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { useAudioContext } from '../components/audio/AudioProvider';
import audio from '../components/audio/hooks/audio-hooks';
import LibraryWidget from '../components/library/LibraryWidget';

const LibraryScreen = () => {
  const {setSongs} = useAudioContext();

  useEffect(() => {
    audio.getSongs(setSongs).catch((err) => console.log(err))
  }, []);

  return (
    <View className='w-full flex-1 px-4'>
      <View testID='tocomplete' className='mb-[58px]'>

      </View>
      <View className='mt-2 mb-3'>
        <Text className='text-bbaby-text text-[13px] font-semibold'>Recently played</Text>
      </View>
      <LibraryWidget />
    </View>
  )
}

export default LibraryScreen;
