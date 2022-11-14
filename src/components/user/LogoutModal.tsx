import { View, Text, Modal, TouchableOpacity } from 'react-native'
import React, { Dispatch, SetStateAction } from 'react'
import { BASE_URL } from '../../config/config';
import { useMessage } from '../main/TimeMsgProvider';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSession } from '../auth/UserProvider';
import { catchErrorWithMessage } from '../../config/common';

type LogoutModal = {
    showLogout: boolean
    setShowLogout: Dispatch<SetStateAction<boolean>>
}

const LogoutModal = ({ showLogout, setShowLogout }: LogoutModal) => {
    const navigation = useNavigation<NativeStackNavigationProp<MainStackNavigatorProps>>();
    const message = useMessage();
    const {setSession} = useSession();


    const logout = async () => {
        try {
          const url = `${BASE_URL}/logout`;
          const res = await fetch(url, {
            method: 'POST',
            body: JSON.stringify({}),
            credentials: 'include'
          });
          if (!res.ok) {
            message.setMessage({value: 'Something went wrong', status: 'error'});
          } else {
            await AsyncStorage.removeItem('session');
            closeModal();
            setSession(null);
            navigation.navigate('Auth');
          }
        } catch (err) {
          catchErrorWithMessage(err, message);
        }
      }

    const closeModal = () => {
        setShowLogout(false);
    }

  return (
    <Modal
        transparent={true}
        visible={showLogout}
    >
        <View className='flex-1 items-center justify-center'>
            <View className='w-auto max-w-[300px] bg-bbaby-brighter h-[120px] rounded-md items-center'>
                <View className='px-8 items-center mt-4'>
                    <Text className='text-bbaby-text font-bold text-lg'>Log Out</Text>
                    <Text className='text-bbaby-text'>Are you sure you want to log out?</Text>
                </View>
                <View className='w-full flex-row mt-[18px] justify-center items-center border-t border-bbaby-border'>
                    <TouchableOpacity className='flex-1' onPress={closeModal}>
                        <View className='border-r border-bbaby-border px-6 items-center justify-center'>
                            <Text className='text-bbaby-blue'>Cancel</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity className='flex-1' onPress={logout}>
                        <View className='border-bbaby-border px-6 items-center justify-center'>
                            <Text className='text-bbaby-blue m-auto'>Log Out</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </Modal>
  )
}

export default LogoutModal;