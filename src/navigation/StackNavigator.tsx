import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import {COLORS} from '../config/config';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {backgroundColor: COLORS.default},
      }}>
      <Stack.Screen name="home2" component={HomeScreen} options={{title: 'main'}} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
