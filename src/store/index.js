import { createStore, applyMiddleware, compose } from "redux";
import asyncReducer from "./reducers";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(asyncReducer, composeEnhancers( applyMiddleware(thunk)) )

export default store;