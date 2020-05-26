import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";

import viewReducer from "./redux/reducers/view";
// import apiReducer from "./api/reducer";
import audioReducer from "./redux/reducers/audio";
import navReducer from "./redux/reducers/navigation";

const rootReducer = combineReducers({
	viewState: viewReducer,
	// apiState: apiReducer,
	audioState: audioReducer,
	navState: navReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(thunkMiddleware))
);

export default store;
