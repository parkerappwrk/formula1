import { combineReducers } from 'redux';
import amountReducers from "./amountReducers";

console.log(amountReducers);
const reducers = combineReducers({
    playerdata: amountReducers
});

export default reducers;