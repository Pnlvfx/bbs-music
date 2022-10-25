import React from 'react'
import { BottomTabBar, BottomTabBarProps } from '@react-navigation/bottom-tabs'
import { BlurView } from '@react-native-community/blur';

const CustomTabNavigator = (props: BottomTabBarProps) => {
  return (
    <BlurView 
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        elevation: 50,
      }}
      blurType='dark'
      blurAmount={10}
      blurRadius={25}
      overlayColor='transparent'
      >
      <BottomTabBar {...props} style={{zIndex: 50, elevation: 50}} />
    </BlurView>
  )
}

export default CustomTabNavigator;