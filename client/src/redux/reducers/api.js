import {
	FETCH_ALBUM,
	FETCH_ALBUM_LIST,
	FETCH_ARTIST,
	FETCH_ARTIST_LIST,
} from "../types";

const initialState = {
	data: {
		artists: [],
		albums: [],
		artistData: {},
		albumData: {},
	},
};

const apiReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_ALBUM:
			return {
				...state,
				data: {
					...state.data,
					albumData: {
						...state.data.albumData,
						[action.album]: action.tracks,
					},
				},
			};

		case FETCH_ALBUM_LIST:
			return {
				...state,
				data: {
					...state.data,
					albumData: {
						...state.data.albumData,
						...action.albumData,
					},
					albums: action.album,
				},
			};

		case FETCH_ARTIST:
			return {
				...state,
				data: {
					...state.data,
					artistData: {
						...state.data.artistData,
						[action.name]: action.albums,
					},
					albumData: {
						...state.data.albumData,
						...action.albumData,
					},
				},
			};

		case FETCH_ARTIST_LIST:
			return {
				...state,
				data: {
					...state.data,
					artists: action.artists,
					artistData: action.artistData,
				},
			};

		default:
			return state;
	}
};

export default apiReducer;
