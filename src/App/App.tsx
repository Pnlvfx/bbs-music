import {StatusBar} from 'react-native';
import React from 'react';
import {COLORS} from '../config/config';
import {NavigationContainer} from '@react-navigation/native';
import { AudioContextProvider } from '../components/audio/AudioProvider';
import MainStackNavigator from '../navigation/MainStackNavigator';
import { TimeMsgContextProvider } from '../components/main/TimeMsgProvider';
import TimeMsg from '../components/main/TimeMsg';


const App = () => {
  return (
    <TimeMsgContextProvider>
      <AudioContextProvider>
        <StatusBar backgroundColor={COLORS.default} barStyle={'light-content'} />
        <NavigationContainer>
          <MainStackNavigator />
        </NavigationContainer>
        <TimeMsg />
     </AudioContextProvider>
    </TimeMsgContextProvider>
  );
};

export default App;
