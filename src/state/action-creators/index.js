export const updatePoints = (points,playerid)  => {
    return (dispatch) => {
        dispatch({
            type: 'pointsup',
            point: points,
            user: playerid
        })
    }
}

export const withdrawMoney = (amount)=> {
    return (dispatch) => {
        dispatch({
            type: 'withdraw',
            payload: amount
        })
    }
}