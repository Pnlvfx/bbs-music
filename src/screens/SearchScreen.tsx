import {Text, TouchableWithoutFeedback, View} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const SearchScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<SearchStackNavigatorProps>>();
  return (
    <View className=''>
      <TouchableWithoutFeedback
        className="justify-start items-center flex-row w-full"
        onPress={() => {
          navigation.navigate('searchModal')
        }}
      >
        <View className="rounded-md flex-row w-full h-[48px] pl-3 bg-bbaby-brighter items-center">
          <Text className="text-bbaby-text w-full">
            What do you want to listen to?
          </Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default SearchScreen;
