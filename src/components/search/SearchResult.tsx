import { Text, Image} from 'react-native';
import React, { useState } from 'react';
import {BASE_URL} from '../../config/config';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useAudioContext } from '../audio/AudioProvider';
import { useTimeMsg } from '../main/TimeMsgProvider';
import audio from '../audio/hooks/audio-hooks';
import { Track } from 'react-native-track-player';

type SearchResultProps = {
  result: SearchResult
}

const SearchResult = ({result}: SearchResultProps) => {
  const {setSongs} = useAudioContext();
  const message = useTimeMsg();
  const [loading, setLoading] = useState(false);

  const downloadMusic = async () => {
    try {
      setLoading(true);
      const url = `${BASE_URL}/music/download`;
      const body = JSON.stringify({
        url: result.link
      });
      const headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      };
      const res = await fetch(url, {
        method: 'POST',
        headers,
        body
      });
      const songs = await audio.getSongs(setSongs)
      const data = await res.json() as Track;
      if (res.ok) {
        message.setMessage({value: 'New song added to your playlist!', status: 'success'});
      }
      setLoading(false);
    } catch (err) {
      
    }
  }

  return (
    <TouchableOpacity 
      onPress={() => downloadMusic()} 
      className={`flex-row items-center p-3 overflow-hidden`}
    >
      <Image 
        className='w-10 h-10 rounded' 
        source={{uri: `${BASE_URL}/images/icons/c18-art.jpeg`}} 
      />
      <Text className="text-bbaby-text pl-3 font-bold mr-12">{result.title}</Text>
    </TouchableOpacity>
  );
};

export default SearchResult;
