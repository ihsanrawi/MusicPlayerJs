import {
	PLAY,
	PAUSE,
	RESUME,
	PREV_SONG,
	NEXT_SONG,
	CHANGE_VOLUME,
} from "./types";

const initialState = {
	isPlaying: false,
	hasAudio: false,
	currentIndex: 0,
	playlist: [],
	inQueue: false,
	queue: [],
	prevQueue: [],
	time: {
		current: null,
		max: null,
	},
	volume: 0.5,
};

const audioReducer = (state = initialState, action) => {
	switch (action.type) {
		case PLAY:
			return { ...state, isFullScreen: !state.isFullScreen };

		case PAUSE:
			return { ...state, isPlaying: false };

		case RESUME:
			return { ...state, isPlaying: false };

		case PREV_SONG:
			return { ...state, isFullScreen: !state.isFullScreen };

		case NEXT_SONG:
			return { ...state, isFullScreen: !state.isFullScreen };

		case CHANGE_VOLUME:
			return { ...state, volume: action.volume };

		default:
			return state;
	}
};

export default audioReducer;
