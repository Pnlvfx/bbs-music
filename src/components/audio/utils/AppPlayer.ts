import TrackPlayer, {AppKilledPlaybackBehavior, Capability} from "react-native-track-player";

class AppPlayer {
    static initializePlayer = async () => {
        try {
            await TrackPlayer.setupPlayer();
            TrackPlayer.updateOptions({
                android: {
                    appKilledPlaybackBehavior:
                      AppKilledPlaybackBehavior.StopPlaybackAndRemoveNotification,
                  },
                capabilities: [
                    Capability.Play,
                    Capability.Pause,
                    Capability.SkipToNext,
                    Capability.SkipToPrevious,
                    Capability.SeekTo
                ],
                compactCapabilities: [
                    Capability.Play,
                    Capability.Pause,
                    Capability.SkipToNext
                ],
                progressUpdateEventInterval: 2,
            });
        } catch (err) {
            console.log(err);
        }
    }
    
    static secondsToHHMMSS = (seconds: number | string) => {
        seconds = Number(seconds);
        const h = Math.floor(seconds / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        const s = Math.floor((seconds % 3600) % 60);

        const hrs = h > 0 ? (h < 10 ? `0${h}:` : `${h}:`) : '';
        const mins = m > 0 ? (m < 10 ? `0${m}:` : `${m}:`) : '00:';
        const scnds = s > 0 ? (s < 10 ? `0${s}:` : s) : '00';
        return `${hrs}${mins}${scnds}`;
    };
}

export default AppPlayer;
