import {View, TextInput, TouchableOpacity} from 'react-native';
import React, {Dispatch, RefObject, SetStateAction, useRef, useState} from 'react';
import {BASE_URL, COLORS} from '../../config/config';
import { CloseIcon, SearchIcon } from '../../config/SVG';
import { useSearchContext } from './SearchProvider';

type SearchBar = {
  setResults: Dispatch<SetStateAction<SearchResult | null>>
  textInputRef: RefObject<TextInput>
}

const SearchBar = ({ setResults, textInputRef }: SearchBar) => {
  const {text, setText} = useSearchContext();
  const [inputLength, setInputLength] = useState(0);

  const searchMusic = async () => {
    try {
      const url = `${BASE_URL}/music/search?text=${text}`;
      const headers = {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      };
      const res = await fetch(url, {
        method: 'get',
        headers,
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data);
      } else {
        console.log(data);
        setResults(data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View className="justify-start items-center flex-row w-full">
      <View className="rounded-md flex-row w-full pl-2 pr-2 py-2 bg-[#121212] items-center">
        <View>
          <SearchIcon fill={'white'} height={18} width={18} />
        </View>
        <TextInput
          ref={textInputRef}
          placeholderTextColor={COLORS.text_darker}
          className="text-bbaby-text font-bold flex-1 h-full pl-2"
          placeholder="What do you want to listen to?"
          onChangeText={text => {
            searchMusic();
            setText(text);
            setInputLength(text.length);
          }}
          onSubmitEditing={searchMusic}
          blurOnSubmit
          value={text}
        />
        {inputLength >= 1 && (
          <TouchableOpacity onPress={() => {
            setText('');
            setInputLength(0)
          }}>
            <View className='h-4 w-4'>
              <CloseIcon height={16} width={16} />
            </View>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default SearchBar;
