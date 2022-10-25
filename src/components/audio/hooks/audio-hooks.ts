import TrackPlayer, { Track } from "react-native-track-player";
import { BASE_URL } from "../../../config/config";
import { useCurrentTrack } from "./useCurrentTrack";

const audio = {
    getSongs: async () => {
        try {
          const url = `${BASE_URL}/music`;
          const res = await fetch(url, {
            method: 'GET',
          });
          const data = await res.json();
          if (res.ok) {
            return data as Track[]
          } else {
            throw new Error(data?.msg);
          }
        } catch (err) {
          throw console.log(err);
        }
      },
}

export default audio;
