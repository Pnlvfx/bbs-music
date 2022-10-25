import { View, Text, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import React from 'react';
import TrackPlayer, { Track, useProgress } from 'react-native-track-player';
import Slider from '@react-native-community/slider';
import AppPlayer from '../audio/utils/AppPlayer';
import { HeartIconOutline, NextIcon, PauseIcon, PlayIcon, PrevIcon } from '../../config/SVG';
import { useAudioContext } from '../audio/AudioProvider';

type PlayerControl = {
    track: Track
}

const PlayerControl = ({track}: PlayerControl) => {
    const progress = useProgress();
    const {playing, playPause} = useAudioContext();

  return (
    <View className='absolute bottom-0 w-full top-[517px] left-0 right-0'>
      <View className='w-full h-full p-4'>
        <View>
            <Text className='font-bold text-2xl text-bbaby-text'>{track.title}</Text>
            <Text className='text-bbaby-text'>{track.artist}</Text>
        </View>
        <View className='mt-[14px]'>
            <Slider
                minimumValue={0}
                maximumValue={track.duration}
                value={progress.position}
                minimumTrackTintColor={'white'}
                onSlidingComplete={TrackPlayer.seekTo}
            />
            <View className='flex-row items-center justify-between'>
                <Text className='text-bbaby-text text-xs'>{ AppPlayer.secondsToHHMMSS(progress.position || 0)}</Text>
                {track.duration && <Text className='text-bbaby-text text-xs'>-{ AppPlayer.secondsToHHMMSS(track.duration - progress.position || 0)}</Text>}
            </View>
            <View className='w-full flex-row items-center justify-between'>
                <TouchableWithoutFeedback>
                    <View>
                        <HeartIconOutline width={24} height={24} />
                    </View>
                </TouchableWithoutFeedback>
                <View className='flex-row items-center justify-between w-full px-12 pr-24'>
                    <TouchableOpacity onPress={() => TrackPlayer.skipToPrevious()}>
                        <View className=''>
                            <PrevIcon fill={'white'} width={32} height={32} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={playPause}>
                        <View className='bg-white p-4 rounded-full'>
                            {playing ? (
                                <PauseIcon fill={'black'} width={36} height={36} />
                            ) : (
                                <PlayIcon fill={'black'} width={36} height={36} />
                            )}
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => TrackPlayer.skipToNext()}>
                        <View>
                            <NextIcon width={32} height={32} />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
      </View>
    </View>
  )
}

export default PlayerControl;
