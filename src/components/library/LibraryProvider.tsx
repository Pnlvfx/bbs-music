import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { Track } from "react-native-track-player";
import { catchErrorWithMessage } from "../../config/common";
import audio from "../audio/hooks/audio-hooks";
import { useSession } from "../auth/UserProvider";
import { useMessage } from "../main/TimeMsgProvider";

interface LibraryProvider {
    likedSongs: Track[]
}

const LibraryContext = createContext<LibraryProvider | {}>({});

interface LibraryContextProvider {
    children: ReactNode;
}

export const LibraryContextProvider = ({children}: LibraryContextProvider) => {
    const [likedSongs, setLikedSongs] = useState<Track[]>([]);
    const message = useMessage();
    const {session} = useSession();
  
    useEffect(() => {
      const getLikedSongs = async () => {
        try {
          const songs = await audio.getSongs();
          setLikedSongs(songs);
        } catch (err) {
          catchErrorWithMessage(err, message)
        }
      }
      getLikedSongs();
    }, [session]);

    return (
        <LibraryContext.Provider value={{
            likedSongs
        }}>
            {children}
        </LibraryContext.Provider>
    )
}

export const useLibraryContext = () => {
    const context = useContext(LibraryContext) as LibraryProvider;
    if (!context) {
        throw new Error(
        'Library component must be used with LibraryProvider component',
        );
    }
    return context;
}