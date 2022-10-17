import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';
import SearchBar from '../components/search/SearchBar';
import { useNavigation } from '@react-navigation/native';
import SearchResult from '../components/search/SearchResult';

const SearchModal = () => {
    const navigation = useNavigation();
    const [results, setResults] = useState<SearchResult[] | []>([]);
    
  return (
    <View className="bg-bbaby-default flex-1">
      <View className='pt-14 bg-bbaby-brighter h-[98px]'>
        <View className="h-[33px] flex-row items-center pl-4 bg-bbaby-brighter">
          <View className="flex-1">
            <SearchBar setResults={setResults} />
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <Text className="text-bbaby-text px-3 mt-2">Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView className="mt-3 h-full">
        {results.map((result, index) => (
          <SearchResult key={index} result={result} />
        ))}
      </ScrollView>
  </View>
  )
}

export default SearchModal;
