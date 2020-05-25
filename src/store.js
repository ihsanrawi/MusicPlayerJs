import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";

// import viewReducer from "./views/reducer";
// import apiReducer from "./api/reducer";
// import audioReducer from "./audio/redux/reducer";
import navReducer from "./components/bar/redux/reducer";

const rootReducer = combineReducers({
	// viewState: viewReducer,
	// apiState: apiReducer,
	// audioState: audioReducer,
	navState: navReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(thunkMiddleware))
);

export default store;
