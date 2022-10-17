import React, { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from "react";
import { Track } from "react-native-track-player";
import Audio from "./Audio";
import AppPlayer from "./utils/AppPlayer";

interface AudioContext {
    currentSong: Track,
    setCurrentSong: Dispatch<SetStateAction<Track>>
    playing: boolean
    setPlaying: Dispatch<SetStateAction<boolean>>
    songs: Track[]
    setSongs: Dispatch<SetStateAction<Track[]>>
    currentIndex: number | undefined,
    setCurrentIndex: Dispatch<SetStateAction<number | undefined>>
}

const AudioContext = createContext({});

interface AudioContextProvider {
    children: ReactNode;
}

export const AudioContextProvider = ({children}: AudioContextProvider) => {
    const [songs, setSongs] = useState<Track[] | []>([]);
    const [currentSong, setCurrentSong] = useState('');
    const [playing, setPlaying] = useState(false);
    const [currentIndex, setCurrentIndex] = useState();

    useEffect(() => {
      AppPlayer.initializePlayer();
    }, []);

    return (
        <AudioContext.Provider value={{
            currentSong,
            setCurrentSong,
            playing,
            setPlaying,
            songs,
            setSongs,
            currentIndex,
            setCurrentIndex
        }}>
            {children}
            {currentSong && <Audio />}
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