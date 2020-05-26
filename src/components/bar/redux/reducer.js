import { TOGGLE_FULLSCREEN } from "./constants";

const initialState = {
	isFullScreen: false,
	debug: false,
};

const navReducer = (state = initialState, action) => {
	switch (action.type) {
		case TOGGLE_FULLSCREEN:
			return { ...state, isFullScreen: !state.isFullScreen };

		default:
			return state;
	}
};

export default navReducer;
