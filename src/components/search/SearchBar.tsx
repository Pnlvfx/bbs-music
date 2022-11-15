import {View, TextInput, TouchableOpacity} from 'react-native';
import React, { Dispatch, SetStateAction, useEffect, useRef, useState} from 'react';
import { COLORS} from '../../config/config';
import { CloseIcon, SearchIcon } from '../../config/SVG';
import { catchErrorWithMessage } from '../../config/common';
import { useMessage } from '../main/TimeMsgProvider';
import { SearchTrack } from '../../../@types/search';
import trackapis from '../API/trackAPI';

type SearchBar = {
  setResults: Dispatch<SetStateAction<SearchTrack | undefined>>
}

const SearchBar = ({ setResults }: SearchBar) => {
  const [inputLength, setInputLength] = useState(0);
  const [text, setText] = useState('');
  const message = useMessage();
  const textInputRef = useRef<TextInput>(null)

  const search = async () => {
    try {
      const _results = await trackapis.search(text);
      setResults(_results);
    } catch (err) {
      catchErrorWithMessage(err, message);
    }
  };

  useEffect(() => { // search
    if (!text || text.length < 1) return;
    const timer = setTimeout(() => {
      search();
    }, 300)
    return () => {
      clearTimeout(timer);
    }
  }, [text])

  useEffect(() => { //open search input on open modal
    textInputRef.current?.focus();
  }, [])

  return (
    <View className="justify-start items-center flex-row w-full">
      <View className="rounded-md flex-row flex-1 bg-[#121212] items-center">
        <View className='flex-1 flex-row p-2 items-center'>
          <View>
            <SearchIcon fill={'white'} height={18} width={18} />
          </View>
          <TextInput
            ref={textInputRef}
            placeholderTextColor={COLORS.text_darker}
            className="text-bbaby-text font-bold flex-1 h-full pl-2"
            placeholder="What do you want to listen to?"
            onChangeText={text => {
              setText(text);
              setInputLength(text.length);
            }}
            onSubmitEditing={search}
            blurOnSubmit
            value={text}
          />
        </View>
        {inputLength >= 1 && (
          <TouchableOpacity
            className=''
            onPress={() => {
              setText('');
              setInputLength(0)
            }}
          >
            <View className='p-2'>
              <CloseIcon height={16} width={16} />
            </View>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default SearchBar;
