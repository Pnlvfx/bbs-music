import { Track } from "react-native-track-player";
import { catchError } from "../../../config/common";
import { BASE_URL } from "../../../config/config";

const audio = {
    getSongs: async () => {
      try {
        const url = `${BASE_URL}/music/liked_songs`;
        const res = await fetch(url, {
          method: 'GET',
          credentials: 'include'
        });
        const data = await res.json();
        if (res.ok) {
          return data as Track[]
        } else {
          throw new Error(data?.msg);
        }
      } catch (err) {
        throw catchError(err);
      }
    },
    addNextSong: async (artist: string, track: string) => {
      try {
        const url = `${BASE_URL}/music/get_similar`;
        const body = JSON.stringify({
          artist,
          track
        });
        const headers = {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        };
        const res = await fetch(url, {
          method: 'POST',
          headers,
          body
        });
        const data = await res.json() as Track;
        if (res.ok) {
          return data as Track;
        } else {
         throw new Error(data?.msg);
        }
      } catch (err) {
        throw catchError(err);
      }
    }
}

export default audio;
