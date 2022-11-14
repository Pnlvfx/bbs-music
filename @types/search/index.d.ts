import { Track } from "react-native-track-player";

type SearchTrack = {
    songs: TrackSearch[]
}

interface TrackSearch extends Track {
    isSaved: boolean
}

type imageProps = {
    '#text': string
    size: string
}