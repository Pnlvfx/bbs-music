import { View, Text, Image, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { useSession } from '../auth/UserProvider';
import { DropdownIcon } from '../../config/SVG';
import LogoutModal from './LogoutModal';

const UserHeader = (props: DrawerContentComponentProps) => {
  const {session} = useSession();
  const [showLogout, setShowLogout] = useState(false);

  const openLogoutModal = () => {
    setShowLogout(true);
  }

  return (
    <>
    <SafeAreaView className='flex-1'>
      <View>
        <View>

        </View>
      </View>
      <DrawerContentScrollView {...props}>
        <View className='items-center'>
          <Image 
            source={{uri: session?.user?.avatar}}
            className='w-20 h-20'
          />
          <TouchableWithoutFeedback>
            <View className='flex-row items-center justify-center py-4 px-2'>
              <Text className='text-bbaby-text text-lg font-bold mr-1'>{session?.user?.username}</Text>
              <DropdownIcon height={16} width={16} />
            </View>
          </TouchableWithoutFeedback>
        </View>
        <DrawerItemList {...props} />
        <View className='flex-row items-center justify-center'>
          <TouchableOpacity onPress={openLogoutModal}>
            <View className='bg-white py-3 px-8 rounded-full'>
              <Text className='text-black text-[14px] font-bold'>Log out</Text>
            </View>
          </TouchableOpacity>
        </View>
      </DrawerContentScrollView>
    </SafeAreaView>
    <LogoutModal showLogout={showLogout} setShowLogout={setShowLogout} />
    </>
  );
};

export default UserHeader;