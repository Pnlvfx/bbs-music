import { ScrollView } from 'react-native';
import React from 'react';
import PlaylistContent from '../components/playlist/PlaylistContent';
import { useAudioContext } from '../components/audio/AudioProvider';

const PlaylistScreen = () => {
  const {songs} = useAudioContext();

  return (
    <ScrollView className='mt-7'>
      {songs.map((song, index) => (
        <PlaylistContent key={index} song={song} index={index} />
      ))}
    </ScrollView>
  )
}

export default PlaylistScreen;
