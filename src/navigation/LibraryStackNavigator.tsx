import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {COLORS} from '../config/config';
import LibraryScreen from '../screens/LibraryScreen';
import PlaylistScreen from '../screens/PlaylistScreen';
import PlaylistHeader from '../components/headers/PlaylistHeader';
import HomeHeader from '../components/headers/HomeHeader';

const Stack = createNativeStackNavigator<LibraryStackNavigatorProps>();

const LibraryStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: {backgroundColor: COLORS.default},
        header: (props) => {
          return (
            <PlaylistHeader {...props} />
          )
        }
      }}>
      <Stack.Screen 
        name="library" 
        component={LibraryScreen} 
        options={{
          title: 'Library',
          header: (props) => {
            return (
              <HomeHeader {...props} />
            )
          }
        }} 
      />
      <Stack.Screen 
        name='playlist' 
        component={PlaylistScreen} 
        options={{
          title: 'Playlist',
          header: (props) => {
            return (
              <PlaylistHeader {...props} />
            )
          }
        }} 
      />
    </Stack.Navigator>
  );
};

export default LibraryStackNavigator;