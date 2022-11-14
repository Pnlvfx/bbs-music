import { View, Text, Image } from 'react-native';
import React, { useEffect } from 'react';
import { BASE_URL, STATIC_URL, headers } from '../config/config';
import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';
import { getUserIP } from '../components/API/oauthAPI';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useMessage } from '../components/main/TimeMsgProvider';
import { catchErrorWithMessage } from '../config/common';

const AuthScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<MainStackNavigatorProps>>();
  const message = useMessage();
  
  useEffect(() =>{
    GoogleSignin.configure({
      webClientId: process.env.GOOGLE_API_KEY,
      offlineAccess: true,
      forceCodeForRefreshToken: true,
      iosClientId: process.env.GOOGLE_API_KEY
    })
  }, []);

  const googleLogin = async () => {
    try {
      const isSigned = await GoogleSignin.isSignedIn();
      if (isSigned) await GoogleSignin.signOut();
      await GoogleSignin.hasPlayServices();
      let userInfo = await GoogleSignin.signIn();
      const url = `${BASE_URL}/google_login`;
      const infoIp = await getUserIP();
      const {country, countryCode, city, region, lat, lon} = infoIp;
      const body = JSON.stringify({
        email: userInfo.user.email,
        username: userInfo.user.name,
        avatar: userInfo.user.photo,
        country,
        countryCode,
        city,
        region,
        lat,
        lon
      });
      const res = await fetch(url, {
        method: 'POST',
        body,
        headers,
        credentials: 'include'
      });
      const data = await res.json();
      if (!res.ok) {
        message.setMessage({value: data?.msg, status: 'error'});
      } else {
        await AsyncStorage.setItem('session', JSON.stringify(data));
        navigation.navigate('Root');
        return data as SessionProps;
      }
    } catch (err) {
      catchErrorWithMessage(err, message);
    }
  }

  return (
    <View className='bg-bbaby-default flex-1 justify-center items-center'>
      <View className='mt-[70px]'>
        <Image 
          source={{uri: `${STATIC_URL}/images/icons/logo.png`}}
          className='w-[50px] h-[50px]'
        />
      </View>
     <View className='mt-6 text-center items-center justify-center'>
        <Text className='text-bbaby-text text-[28px] leading-9 font-bold'>Milions of songs.</Text>
        <Text className='text-bbaby-text text-[28px] leading-9 font-bold'>Free on bbs-music.</Text>
     </View>
     <View className='mt-5 w-full px-8'>
     <GoogleSigninButton
        style={{width: '100%', height: 48, borderRadius: 10}}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={googleLogin}
      />
     </View>
    </View>
  )
}

export default AuthScreen;