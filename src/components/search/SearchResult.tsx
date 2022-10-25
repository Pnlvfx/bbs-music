import { Text, Image, View, ActivityIndicator} from 'react-native';
import React, { useState } from 'react';
import {BASE_URL} from '../../config/config';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useTimeMsg } from '../main/TimeMsgProvider';
import TrackPlayer, { Track } from 'react-native-track-player';
import { useAudioContext } from '../audio/AudioProvider';

type SearchResultProps = {
  result: SearchResult['songs'][0]
}

const SearchResult = ({result}: SearchResultProps) => {
  const message = useTimeMsg();
  const [loading, setLoading] = useState(false);
  const {refreshSongs} = useAudioContext();

  const downloadMusic = async () => {
    try {
      setLoading(true);
      const url = `${BASE_URL}/music/download`;
      const body = JSON.stringify({
        artist: result.artist,
        song: result.name
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
      const data = await res.json() as Track;
      if (res.ok) {
        await TrackPlayer.add(data, 0);
        await refreshSongs();
        message.setMessage({value: 'New song added to your playlist!', status: 'success'});
      }
      setLoading(false);
    } catch (err) {
      
    }
  }

  return (
    <TouchableOpacity 
      onPress={downloadMusic} 
      className={`flex-row items-center p-3 overflow-hidden`}
    >
      <View className='relative w-10 h-10'>
        <Image 
          className='w-10 h-10 rounded'
          source={{uri: result.image[1]['#text']}} 
        />
        {loading && <ActivityIndicator color={'black'} className='absolute w-10 h-10' />}
      </View>
      <View className='flex-row pr-2'>
        <Text className="text-bbaby-text pl-3 font-bold">{result.artist}</Text>
        <Text className="text-bbaby-text pl-1 font-bold">
          {result.name.length >= 30 ?  `${result.name.substring(0, 30)}...` : result.name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default SearchResult;
