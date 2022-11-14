import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BottomTabHeaderProps } from '@react-navigation/bottom-tabs';
import { useSession } from '../auth/UserProvider';
import { useNavigation } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';

const HomeHeader = (props: BottomTabHeaderProps) => {
  const {session} = useSession();
  const navigation = useNavigation<DrawerNavigationProp<DrawerNavigator>>();
  return (
    <SafeAreaView className='bg-bbaby-default h-[120px] w-full relative'>
      <View className='bottom-2 absolute flex-row ml-4'>
        {props.route.name === 'library' && (
          <View className='w-9 h-9 rounded-full mr-2'>
            <TouchableWithoutFeedback onPress={() => {
              navigation.openDrawer();
            }}>
              <Image source={{uri: session?.user?.avatar}} className='w-full h-full rounded-full' />
            </TouchableWithoutFeedback>
          </View>
        )}
        <View className='h-full flex-row items-center'>
          <Text className='text-bbaby-text text-2xl font-bold'>{props.route.name === 'Home' ? 'Good Evening' : props.route.name === 'Search' ? 'Search' : 'Your Library'}</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default HomeHeader