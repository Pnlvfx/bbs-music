import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from "react";
import TrackPlayer, { State, Track } from "react-native-track-player";
import { catchErrorWithMessage } from "../../config/common";
import { useSession } from "../auth/UserProvider";
import { useMessage } from "../main/TimeMsgProvider";
import Audio from "./Audio";
import { useCurrentTrack } from "./hooks/useCurrentTrack";
import AppPlayer from "./utils/AppPlayer";

interface AudioContext {
    playing: boolean
    setPlaying: Dispatch<SetStateAction<boolean>>
    playPause: () => Promise<void>
    playSong: (index: number) => Promise<void>
    track: Track
}

const AudioContext = createContext<AudioContext | {}>({});

interface AudioContextProvider {
    children: ReactNode;
}

export const AudioContextProvider = ({children}: AudioContextProvider) => {
    const [playing, setPlaying] = useState(false);
    const {session, isLoading} = useSession();
    const [isReady, setIsReady] = useState(false);
    const message = useMessage();
    const track = useCurrentTrack();

    const playPause = async () => {
        try {
            const state = await TrackPlayer.getState();
            if (state === State.Playing) {
                await TrackPlayer.pause();
                return setPlaying(false);
            }
            if (state === State.Paused || State.Ready || State.Connecting) {
                await TrackPlayer.play();
                return setPlaying(true);
            }
        } catch (err) {
            console.log(err), 'PlayPause';
        }
    }

    const playSong = async (index: number) => {
        try {
            setPlaying(true);
            await TrackPlayer.skip(index);
            await TrackPlayer.play();
        } catch (err) {
            console.log(err, 'playSong');
        }
    };

    useEffect(() => {
        if (isLoading) return;
        if (!session) return;
        const run = async () => {
            try {
                await AppPlayer.initializePlayer();
                setIsReady(true);
            } catch (err) {
                catchErrorWithMessage(err, message);
            }
        }
        run();
    }, [isLoading]);

    useEffect(() => {
        if (!isReady) return;
        const run = async () => {
            try {
                const last_song = await AsyncStorage.getItem('last_played');
                if (last_song) {
                    await TrackPlayer.reset();
                    await TrackPlayer.add(JSON.parse(last_song));
                }
            } catch (err) {
                console.log(err, 'audioProvider');
            }
        }
        run();
      }, [isReady]);

    return (
        <AudioContext.Provider value={{
            playing,
            setPlaying,
            playPause,
            playSong,
            track
        }}>
            {children}
            {track && <Audio />}
        </AudioContext.Provider>
    )
}

export const useAudioContext = () => {
    const context = useContext(AudioContext) as AudioContext;
    if (!context) {
        throw new Error(
        'Audio component must be used with AudioProvider component',
        );
    }
    return context;
}