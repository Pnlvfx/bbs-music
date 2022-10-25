import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {COLORS} from '../config/config';
import SearchScreen from '../screens/SearchScreen';

const Stack = createNativeStackNavigator<SearchStackNavigatorProps>();

const SearchStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {backgroundColor: COLORS.default},
      }}>
      <Stack.Screen name="search" component={SearchScreen} options={{title: 'Search'}} />
    </Stack.Navigator>
  );
};

export default SearchStackNavigator;