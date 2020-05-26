import {
	PLAY,
	PAUSE,
	RESUME,
	PREV_SONG,
	NEXT_SONG,
	CHANGE_VOLUME,
} from "./constants";

export const play = () => ({ type: PLAY });
export const pause = () => ({ type: PAUSE });
export const resume = () => ({ type: RESUME });
export const prevSong = () => ({ type: PREV_SONG });
export const nextSong = () => ({ type: NEXT_SONG });
export const changeVolume = (volume) => ({ type: CHANGE_VOLUME, volume });
