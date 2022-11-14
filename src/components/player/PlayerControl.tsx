import { View, Text, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import TrackPlayer, { Track, useProgress } from 'react-native-track-player';
import Slider from '@react-native-community/slider';
import AppPlayer from '../audio/utils/AppPlayer';
import { HeartIcon, HeartIconOutline, NextIcon, PauseIcon, PlayIcon, PrevIcon } from '../../config/SVG';
import { useAudioContext } from '../audio/AudioProvider';
import { BASE_URL } from '../../config/config';
import { useSession } from '../auth/UserProvider';

type PlayerControl = {
    track: Track
}

const PlayerControl = ({track}: PlayerControl) => {
    const progress = useProgress();
    const {playing, playPause} = useAudioContext();
    const {session, revalidateSession} = useSession();
    const _liked = session?.user?.liked_songs.find((liked) => liked === track._id);
    const [liked, setLiked] = useState(_liked ? true : false);

    useEffect(() => {
        if (!session) return;
        const refreshLiked = () => {
            const _liked = session?.user?.liked_songs.find((liked) => liked === track._id);
            if (_liked) {
                setLiked(true)
            } else {
                setLiked(false);
            }
        }
        refreshLiked();
    }, [session]);

    const goBack = async () => {
        try {
            if (progress.position < 3) {
                await TrackPlayer.skipToPrevious();
            } else {
                await TrackPlayer.seekTo(0);
            }
        } catch (err) {
            console.log(err, 'songModal');
        }
    }

    const likeSong = async () => {
        try {
            const url = `${BASE_URL}/music/like`;
            const body = JSON.stringify({
                _id: track._id,
            });
            const headers = {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              };
            const res = await fetch(url, {
                method: 'POST',
                credentials: 'include',
                headers,
                body
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.msg);
            await revalidateSession();
            return data;
        } catch (err) {
            console.log(err);
        }
    }

  return (
    <View className='absolute bottom-0 w-full top-[517px] left-0 right-0'>
      <View className='w-full h-full p-4'>
        <View className='flex-row items-center justify-start'>
            <View className='flex-1'>
                <View className='h-8 pr-5 overflow-hidden'>
                    <Text className='font-bold text-2xl text-bbaby-text'>{track.title}</Text>
                </View>
                <Text className='text-bbaby-text'>{track.artist}</Text>
            </View>
            <TouchableWithoutFeedback onPress={likeSong}>
                <View className='p-2'>
                    {liked ? (
                         <HeartIcon width={24} height={24} fill={'#073abb'} />
                    ) : (
                        <HeartIconOutline width={24} height={24} />
                    )}
                </View>
            </TouchableWithoutFeedback>
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
                <View className='flex-row items-center justify-between w-full px-12'>
                    <TouchableOpacity onPress={goBack}>
                        <View className='p-2'>
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
                        <View className='p-2'>
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
