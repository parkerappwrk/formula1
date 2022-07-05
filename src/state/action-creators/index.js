export const depositMoney = (amount)  => {
    retrun (dispatch)=>{
        dispatch({
            type: 'deposit',
            payload: amount
        })
    }
}

export const withdrawMoney = (amount)=> {
    retrun (dispatch)=>{
        dispatch({
            type: 'withdraw',
            payload: amount
        })
    }
}