import {View, Text, TouchableHighlight, Image} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import {useAudioContext} from '../audio/AudioProvider';
import TrackPlayer, {Track} from 'react-native-track-player';
import {Swipeable} from 'react-native-gesture-handler';
import { swipeToDelete } from './swipeToDelete';
import { useLibraryContext } from '../library/LibraryProvider';

interface PlaylistContent {
  song: Track;
  index: number;
}

const PlaylistContent = ({song, index}: PlaylistContent) => {
  const {likedSongs} = useLibraryContext();
  const { playSong, track} = useAudioContext();
  const [current, setCurrent] = useState(false);

  if (!song.artwork) return null;
  const updateRef = useRef(null);

  useEffect(() => {
    if (track?.id === song?.id) {
      setCurrent(true);
    } else {
      setCurrent(false);
    }
  }, [track]);

  const play = async () => {
    try {
        await TrackPlayer.reset();
        await TrackPlayer.add(likedSongs);
        playSong(index);
    } catch (err) {
      
    }
  }

  return (
    <Swipeable
      ref={updateRef}
      friction={2}
      rightThreshold={40}
      renderRightActions={(progress, dragX) => swipeToDelete(progress, dragX)}
      >
        <View className={`flex-1 overflow-hidden rounded-md ${index === likedSongs.length - 1 ? 'mb-[140px]' : 'mb-0'}`}>
          <TouchableHighlight onPress={play}>
            <View className="mx-2 flex-row items-center h-16">
              <Image
                className="w-12 h-12"
                source={{uri: song.artwork.toString()}}
              />
              <View className="ml-2">
                <View className='flex-row items-center'>
                  {current && (
                    <View>
                      <Text>...</Text>
                    </View>
                  )}
                  <Text className={`${current ? 'text-bbaby-blue' : 'text-bbaby-text'} font-bold break-words mb-[2px]`}>
                    {song.title}
                  </Text>
                </View>
                <Text className="text-bbaby-text_darker text-[12px] font-bold">
                  {song.artist}
                </Text>
              </View>
            </View>
          </TouchableHighlight>
        </View>
    </Swipeable>
  );
};

export default PlaylistContent;
