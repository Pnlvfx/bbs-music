import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DrawerNavigator from './DrawerNavigator';
import AuthScreen from '../screens/AuthScreen';
import { useSession } from '../components/auth/UserProvider';
import { ActivityIndicator } from 'react-native';
import SongScreen from '../screens/SongModal';

const Stack = createNativeStackNavigator<MainStackNavigatorProps>();

const MainStackNavigator = () => {
  const {session, isLoading} = useSession();

  if (isLoading) {
    return (
      <ActivityIndicator />
    )
  }

  return (
    <Stack.Navigator
      initialRouteName={session ? "Root" : "Auth"}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Root"
        component={DrawerNavigator}
      />
      <Stack.Screen
        name="Auth"
        component={AuthScreen}
      />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
