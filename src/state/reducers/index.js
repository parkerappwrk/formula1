import { combineReducer } from 'redux';
import amountReducers from "./amountReducers";


const reducers = combineReducer({
    amount: amountReducers
});

export default reducers;