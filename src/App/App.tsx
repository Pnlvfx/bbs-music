import {StatusBar} from 'react-native';
import React from 'react';
import { COLORS } from '../config/config';
import {NavigationContainer} from '@react-navigation/native';
import { AudioContextProvider } from '../components/audio/AudioProvider';
import MainStackNavigator from '../navigation/MainStackNavigator';
import { TimeMsgContextProvider } from '../components/main/TimeMsgProvider';
import TimeMsg from '../components/main/TimeMsg';
import { UserContextProvider } from '../components/auth/UserProvider';
import NetStatus from '../components/main/NetStatus';

const App = () => {
  return (
    <UserContextProvider>
      <TimeMsgContextProvider>
        <AudioContextProvider>
          <StatusBar backgroundColor={COLORS.default} barStyle={'light-content'} />
          <NavigationContainer>
            <MainStackNavigator />
          </NavigationContainer>
          <TimeMsg />
          <NetStatus />
      </AudioContextProvider>
      </TimeMsgContextProvider>
    </UserContextProvider>
  );
};

export default App;
