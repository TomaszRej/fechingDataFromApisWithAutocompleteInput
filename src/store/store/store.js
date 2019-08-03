import { applyMiddleware, compose, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import reducers from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default configureStore;



