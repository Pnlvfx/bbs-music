import { Text, Image, View, ActivityIndicator} from 'react-native';
import React, { useState } from 'react';
import {BASE_URL} from '../../config/config';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useMessage } from '../main/TimeMsgProvider';
import TrackPlayer, { Track } from 'react-native-track-player';
import { useAudioContext } from '../audio/AudioProvider';
import { catchErrorWithMessage } from '../../config/common';
import StarIcon from '../utils/StarIcon';
import { SearchTrack } from '../../../@types/search';
import audio from '../audio/hooks/audio-hooks';

type SearchResultProps = {
  result: SearchTrack['songs'][0]
}

const SearchResult = ({ result }: SearchResultProps) => {
  const message = useMessage();
  const [loading, setLoading] = useState(false);
  const {playSong} = useAudioContext();

  const downloadMusic = async () => {
    try {
      setLoading(true);
      const url = `${BASE_URL}/music/download`;
      const body = JSON.stringify({
        artist: result.artist,
        song: result.title
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
        await TrackPlayer.reset();
        await TrackPlayer.add(data);
        playSong(0);
      } else {
        message.setMessage({value: data?.msg, status: 'error'});
      }
      setLoading(false);
    } catch (err) {
      catchErrorWithMessage(err, message);
      setLoading(false);
    }
  }

  const clickButton = async () => {
    try {
      if (!result.isSaved) {
        await downloadMusic();
      } else {
        await TrackPlayer.reset();
        await TrackPlayer.add(result);
        playSong(0);
      }
      if (!result.artist || !result.title) return;
      const newSong = await audio.addNextSong(result.artist, result.title);
      await TrackPlayer.add(newSong, 1);
    } catch (err) {
      catchErrorWithMessage(err, message);
      setLoading(false);
    }
  }

  return (
    <TouchableOpacity onPress={async () => {
      clickButton();
    }}>
      <View className='flex-row items-center justify-center py-3 px-4'>
        <View className='relative w-10 h-10 mr-3'>
          {result.artwork ? (
          <Image 
            className='w-10 h-10 rounded'
            source={{uri: result.artwork.toString()}}
          />) : (
            <View className='w-10 h-10 rounded bg-white' />
          )}
          {loading && <ActivityIndicator color={'black'} className='absolute w-10 h-10' />}
        </View>
        <View className='overflow-hidden flex-1 text-ellipsis'>
          <Text className={`text-bbaby-text font-bold`}>
            {result.title?.substring(0, 40)}
          </Text>
          <View className='flex-row items-center'>
            <Text className="text-bbaby-text_darker text-xs">Song -</Text>
            <Text className="text-bbaby-text_darker text-xs">{result.artist}</Text>
          </View>
        </View>
        {result.isSaved && (
          <View className=''>
            <StarIcon className='w-5 h-5 fill-[#1d1d7b]' />
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default SearchResult;
