import {
	FETCH_ALBUM,
	FETCH_ALBUM_LIST,
	FETCH_ARTIST,
	FETCH_ARTIST_LIST,
} from "../types";

export const play = () => ({ type: PLAY });
export const pause = () => ({ type: PAUSE });
export const resume = () => ({ type: RESUME });
export const prevSong = () => ({ type: PREV_SONG });
export const nextSong = () => ({ type: NEXT_SONG });
export const changeVolume = (volume) => ({ type: CHANGE_VOLUME, volume });
