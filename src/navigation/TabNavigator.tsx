import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { COLORS } from '../config/config';
import { HomeIcon, LibraryIcon, SearchIcon, SearchIconOpen } from '../config/SVG';
import StackNavigator from './StackNavigator';
import SearchStackNavigator from './SearchStackNavigator';
import LibraryStackNavigator from './LibraryStackNavigator';
import HomeHeader from '../components/headers/HomeHeader';
import CustomTabNavigator from './CustomTabNavigator';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  
  return (
    <Tab.Navigator
      tabBar={(props) => <CustomTabNavigator {...props} />}
      initialRouteName={'Home'}
      screenOptions={{
        tabBarStyle: {backgroundColor: 'transparent', height: 96},
        tabBarActiveTintColor: COLORS.text,
        tabBarInactiveTintColor: COLORS.text_darker,
        headerStyle: {elevation: 0}
      }}
    >
      <Tab.Screen
        name="Home"
        component={StackNavigator}
        options={{
          header: (props) => {
            return <HomeHeader {...props} />
          },
          tabBarIcon: ({color, size}) => (
            <HomeIcon width={size} fill={color} height={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchStackNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({focused, color, size}) => {
            return (
              <>
              {focused ? (
                <SearchIconOpen width={size} fill={color} height={size} />
              ) : (
                <SearchIcon width={size} fill={color} height={size} />
              )}
              </>
          )}
        }}
        listeners={({navigation}) => ({
          tabPress: (e) => {
            e.preventDefault();
            navigation.navigate('Search');
          }
        })}
      />
      <Tab.Screen
        name="Library"
        component={LibraryStackNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => {
            return (
              <LibraryIcon width={size} fill={color} height={size} />
          )},
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
