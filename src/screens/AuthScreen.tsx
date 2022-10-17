import { View, Text, Image } from 'react-native';
import React, { useEffect } from 'react';
import { STATIC_URL } from '../config/config';
import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';

const AuthScreen = () => {

  useEffect(() =>{
    GoogleSignin.configure({
      webClientId: '527300585899-mh0q9kh2fpijep43k37oriuafsl8m9hi.apps.googleusercontent.com',
      forceCodeForRefreshToken: true
    })
  }, []);

  return (
    <View className='bg-bbaby-default flex-1 justify-center items-center'>
      <View>
        <Image 
          source={{uri: `${STATIC_URL}/images/icons/logo.png`}}
          className='w-16 h-16'
        />
      </View>
     <View>
        <Text className='text-bbaby-text text-2xl font-bold'>Milions of songs.</Text>
        <Text className='text-bbaby-text text-2xl font-bold'>Free on bbs-music.</Text>
     </View>
     <View>
      <GoogleSigninButton 
        style={{width: 192, height: 48}}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
      />
     </View>
    </View>
  )
}

export default AuthScreen;