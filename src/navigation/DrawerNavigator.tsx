import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import UserHeader from '../components/user/UserHeader';
import {COLORS} from '../config/config';
import TabNavigator from './TabNavigator';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Drawer"
      backBehavior="history"
      id="rightDrawer"
      drawerContent={props => <UserHeader {...props} />}
      screenOptions={{
        drawerStyle: {
          width: '100%',
          backgroundColor: COLORS.default
        },
        headerShown: false,
        drawerActiveTintColor: COLORS.text,
        drawerInactiveTintColor: COLORS.text_darker,
        headerStyle: {backgroundColor: COLORS.default},
        drawerContentStyle: {backgroundColor: COLORS.default},
        drawerPosition: 'right',
        swipeEdgeWidth: 0,
      }}>
      <Drawer.Screen
        name="Drawer"
        component={TabNavigator}
        options={{headerShown: false, drawerItemStyle: {display: 'none'}}}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
