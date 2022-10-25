import { View, Text } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const SearchHeader = () => {
  return (
    <SafeAreaView className='bg-bbaby-default h-[120px] w-full relative'>
      <View className='bottom-2 absolute flex-row ml-4'>
        <View className='h-full flex-row items-center'>
          <Text className='text-bbaby-text text-2xl font-bold'>Search</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default SearchHeader