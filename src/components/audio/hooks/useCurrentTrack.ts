import { useEffect, useState } from "react";
import TrackPlayer, { Event, Track, useTrackPlayerEvents } from "react-native-track-player";

export const useCurrentTrack = (): Track | undefined => {
    const [index, setIndex] = useState<number | undefined>();
    const [track, setTrack] = useState<Track | undefined>();

    useTrackPlayerEvents([Event.PlaybackTrackChanged], async ({nextTrack}) => {
        setIndex(nextTrack);
    });

    useEffect(() => {
        if (index === undefined) return;
        (async () => {
            try {
                const track = await TrackPlayer.getTrack(index);
                setTrack(track || undefined);
            } catch (err) {
                console.log(err, 'useCurrentTrack');
            }
        })
        ();
    }, [index]);

    return track;
}