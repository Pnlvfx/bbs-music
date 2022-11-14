import { View, Text } from 'react-native';
import React from 'react';
import { useSession } from '../auth/UserProvider';

const NetStatus = () => {
  const {session} = useSession();
  
  return (
    !session?.user?.is_connected ? 
      <View className='absolute bottom-0 left-0 right-0 pb-10 px-2 bg-black w-full'>
        <Text className='text-bbaby-text_darker text-center'>Bbs-music is offline!</Text>
      </View> : null
  )
}

export default NetStatus;