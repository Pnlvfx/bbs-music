import {Text, TextInput, TouchableWithoutFeedback, View} from 'react-native';
import React, { useRef, useState } from 'react';
import SearchModal from './SearchModal';
import SearchHeader from '../components/search/SearchHeader';

const SearchScreen = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  }

  return (
    <View className='w-full h-full'>
      {!showModal && <SearchHeader />}
      <TouchableWithoutFeedback onPress={toggleModal}>
        <View className="rounded-md flex-row w-full h-[48px] pl-3 bg-bbaby-brighter items-center">
          <Text className="text-bbaby-text w-full">
            What do you want to listen to?
          </Text>
        </View>
      </TouchableWithoutFeedback>
      {showModal && <SearchModal toggleModal={toggleModal} />}
    </View>
  );
};

export default SearchScreen;
