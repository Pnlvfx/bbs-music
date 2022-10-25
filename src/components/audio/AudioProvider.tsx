import React, { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from "react";
import TrackPlayer, { State, Track } from "react-native-track-player";
import { useSession } from "../auth/UserProvider";
import Audio from "./Audio";
import audio from "./hooks/audio-hooks";
import { useCurrentTrack } from "./hooks/useCurrentTrack";
import AppPlayer from "./utils/AppPlayer";

interface AudioContext {
    playing: boolean
    setPlaying: Dispatch<SetStateAction<boolean>>
    songs: Track[]
    playPause: () => Promise<void>
    playSong: (index: number) => Promise<void>
    refreshSongs: () => Promise<void>
}

const AudioContext = createContext<AudioContext | {}>({});

interface AudioContextProvider {
    children: ReactNode;
}

export const AudioContextProvider = ({children}: AudioContextProvider) => {
    const [songs, setSongs] = useState<Track[] | []>([]);
    const [playing, setPlaying] = useState(false);
    const {session, isLoading} = useSession();
    const [isReady, setIsReady] = useState(false);

    const playPause = async () => {
        const state = await TrackPlayer.getState();
        if (state === State.Playing) {
          TrackPlayer.pause();
          setPlaying(false);
        }
        if (state === State.Paused) {
          TrackPlayer.play();
          setPlaying(true);
        }
        if (state === State.Ready) {
          TrackPlayer.play();
          setPlaying(true);
        }
    }

    const playSong = async (index: number) => {
        setPlaying(true);
        TrackPlayer.skip(index);
        TrackPlayer.play();
    };

    const refreshSongs = async () => {
        const s = await TrackPlayer.getQueue();
        setSongs(s);
    }

    useEffect(() => {
        if (isLoading) return;
        if (!session) return;
        const run = async () => {
            try {
                await AppPlayer.initializePlayer();
                setIsReady(true);
            } catch (err) {
                
            }
        }
        run();
    }, [isLoading]);

    useEffect(() => {
        if (!isReady) return;
        const run = async () => {
            const s = await audio.getSongs();
            setSongs(s);
            //TrackPlayer.reset();
            TrackPlayer.add(s);
        }
        run();
      }, [isReady]);

    return (
        <AudioContext.Provider value={{
            playing,
            setPlaying,
            songs,
            playPause,
            playSong,
            refreshSongs,
        }}>
            {children}
            {songs && <Audio />}
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