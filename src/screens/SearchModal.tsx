import { View, Text, TouchableOpacity, ScrollView, Keyboard, Animated, TextInput } from 'react-native';
import React, { RefObject, useState } from 'react';
import SearchBar from '../components/search/SearchBar';
import SearchResult from '../components/search/SearchResult';
import { SearchContextProvider } from '../components/search/SearchProvider';

interface SearchModal {
  toggleModal: () => void
  textInputRef: RefObject<TextInput>
}

const SearchModal = ({toggleModal, textInputRef}: SearchModal) => {
    const [results, setResults] = useState<SearchResult | null>(null);
    
  return (
      <Animated.View className="bg-bbaby-default w-full h-full absolute" style={{elevation: 0, zIndex: 0}}>
        <SearchContextProvider>
        <View className='pt-14 bg-bbaby-brighter h-[98px] items-center'>
          <View className="h-[33px] flex-row items-center pl-3 bg-bbaby-brighter">
            <View className="flex-1">
              <SearchBar setResults={setResults} textInputRef={textInputRef} />
            </View>
            <View>
              <TouchableOpacity onPress={toggleModal}>
                <View className='h-full w-full items-center justify-center'>
                  <Text className="text-bbaby-text px-3">Cancel</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <ScrollView onScroll={(e) => {
          Keyboard.dismiss();
        }} className="mt-3 h-full">
          {results?.songs?.length >= 1 &&
           results?.songs.map((result, index) => (
            <SearchResult key={index} result={result} />
          ))}
        </ScrollView>
        </SearchContextProvider>
      </Animated.View>
  )
}

export default SearchModal;
