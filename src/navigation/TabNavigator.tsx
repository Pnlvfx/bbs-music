import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { COLORS } from '../config/config';
import { HomeIcon, LibraryIcon, SearchIcon } from '../config/SVG';
import StackNavigator from './StackNavigator';
import SearchStackNavigator from './SearchStackNavigator';
import LibraryStackNavigator from './LibraryStackNavigator';
import HomeHeader from '../components/headers/HomeHeader';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {backgroundColor: COLORS.default, height: 96},
        tabBarActiveTintColor: COLORS.text,
        tabBarInactiveTintColor: COLORS.text_darker,
        headerStyle: {elevation: 0},
      }}>
      <Tab.Screen
        name="Home"
        component={StackNavigator}
        options={{
          header: (props) => {
            return <HomeHeader {...props} />
          },
          tabBarIcon: ({color, size}) => (
            <HomeIcon style={{fill: color, width: size, height: size}} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchStackNavigator}
        options={{
          header: (props) => {
            return <HomeHeader {...props} />
          },
          tabBarIcon: ({color, size}) => {
            return (
            <SearchIcon style={{fill: color, width: size, height: size}} />
          )},
        }}
      />
      <Tab.Screen
        name="Library"
        component={LibraryStackNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => {
            return (
            <LibraryIcon style={{fill: color, width: size, height: size}} />
          )},
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
