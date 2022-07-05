const reducers = (state=0, action) =>{
    if(action.type === 'deposit'){
        return state + action.payload;
    }
    else if(action.type === 'withdraw'){
        return state - action.payload;
    }
    else{
        state;
    }
}
export default reducers;