import { applyMiddlware, createStore } from "redux";
import reducers from "./reducers";
import thunk from 'redux-thunk';

export const store = createStore(reducers, {}, applyMiddlware(thunk))