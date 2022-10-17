import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { BottomTabHeaderProps } from '@react-navigation/bottom-tabs';

const HomeHeader = (props: BottomTabHeaderProps) => {
  console.log(JSON.stringify(props.route))
  return (
    <SafeAreaView className='bg-bbaby-default w-full'>
        <View className='h-[40px]'>
            <View className='h-full flex-row items-center mt-7'>
                <Text className='text-bbaby-text text-2xl font-bold ml-3'>{props.route.name === 'Home' ? 'Good Evening' : 'Search'}</Text>
            </View>
        </View>
    </SafeAreaView>
  )
}

export default HomeHeader