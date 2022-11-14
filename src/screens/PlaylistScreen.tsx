import { ScrollView } from 'react-native';
import React from 'react';
import PlaylistContent from '../components/playlist/PlaylistContent';
import { useLibraryContext } from '../components/library/LibraryProvider';

const PlaylistScreen = () => {
  const {likedSongs} = useLibraryContext();
  return (
    <ScrollView className='mt-7'>
      {likedSongs.map((song, index) => (
        <PlaylistContent key={index} song={song} index={index} />
      ))}
    </ScrollView>
  )
}

export default PlaylistScreen;
