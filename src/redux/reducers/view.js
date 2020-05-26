import { PUSH_VIEW, POP_VIEW } from "../types";

const initialState = {
	stack: [{ name: "Library", props: {} }],
};

const viewReducer = (state = initialState, action) => {
	switch (action.type) {
		case PUSH_VIEW:
			return { ...state, stack: state.stack.push(action.view) };

		case POP_VIEW:
			return { ...state, stack: state.stack.pop() };

		default:
			return state;
	}
};

export default viewReducer;
