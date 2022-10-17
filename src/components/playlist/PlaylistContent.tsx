import {View, Text, TouchableHighlight, Image} from 'react-native';
import React, { useRef } from 'react';
import {useAudioContext} from '../audio/AudioProvider';
import TrackPlayer, {Track} from 'react-native-track-player';
import {Swipeable} from 'react-native-gesture-handler';
import { swipeToDelete } from './swipeToDelete';

interface PlaylistContent {
  song: Track;
  index: number;
}

const PlaylistContent = ({song, index}: PlaylistContent) => {
  const {setCurrentSong, songs, setCurrentIndex} = useAudioContext();

  const playSong = async () => {
    await TrackPlayer.reset();
    setCurrentSong(song);
    setCurrentIndex(index);
  };

  if (!song.artwork) return null;
  const updateRef = useRef(null);

  return (
    <Swipeable
      ref={updateRef}
      friction={2}
      rightThreshold={40}
      renderRightActions={(progress, dragX) => swipeToDelete(progress, dragX)}
      >
        <View className={`flex-1 overflow-hidden rounded-md ${index === songs.length - 1 ? 'mb-[140px]' : 'mb-0'}`}>
          <TouchableHighlight
            onPress={() => {
              playSong();
            }}>
            <View className="mx-2 flex-row items-center h-16">
              <Image
                className="w-12 h-12"
                source={{uri: song.artwork.toString()}}
              />
              <View className="ml-2">
                <Text className="text-bbaby-text font-bold break-words mb-[2px]">
                  {song.title}
                </Text>
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
