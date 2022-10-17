import {View, TextInput} from 'react-native';
import React, {Dispatch, SetStateAction, useState} from 'react';
import {BASE_URL, COLORS} from '../../config/config';

type SearchBar = {
  setResults: Dispatch<SetStateAction<SearchResult[]>>
}

const SearchBar = ({ setResults }: SearchBar) => {
  const [value, setValue] = useState('');
  const [inputLength, setInputLength] = useState(0);


  const searchMusic = async () => {
    try {
      const url = `${BASE_URL}/music/search`;
      const body = JSON.stringify({
        text: value,
      });
      const headers = {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      };
      const res = await fetch(url, {
        method: 'POST',
        headers,
        body,
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data);
      } else {
        setResults(data);
      }
    } catch (err) {
      console.log(JSON.stringify(err));
    }
  };

  return (
    <View className="justify-start items-center flex-row mt-2 w-full">
      <View className="rounded-md flex-row w-full pl-3 bg-[#121212] items-center">
        <TextInput
          placeholderTextColor={COLORS.text_darker}
          className="text-bbaby-text font-bold w-full h-full py-2"
          placeholder="What do you want to listen to?"
          onChangeText={text => {
            setValue(text);
            setInputLength(text.length);
          }}
          onSubmitEditing={e => searchMusic()}
          blurOnSubmit
        />
        {inputLength >= 1 && (
          <View>
            
          </View>
        )}
      </View>
    </View>
  );
};

export default SearchBar;
