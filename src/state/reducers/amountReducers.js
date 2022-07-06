const reducer = (state=0, action) =>{
    
    if(action.type === 'pointsup'){
        if(action.point){
            state = parseInt(action.point);
        }else{
            state = parseInt(state) + parseInt(action.point);
        }
        const playerdata = {
            "point":state,
            "user":action.user
        }
        return playerdata;
    }
    else if(action.type === 'pointsdown'){
        state = parseInt(state) - parseInt(action.point);
        const playerdata = {
            "point":state,
            "user":action.user
        }
        return playerdata;
    }
    else{
        return state;
    }
}
export default reducer;