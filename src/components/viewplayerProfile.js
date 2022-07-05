import React from "react";
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Link   } from 'react-router-dom';
import PlayerList from "./playerList/playerList";

function ViewPlayerProfile() {
    const amount = useSelector(state => state.amount);
    return (
            <div className="view-player-profile" data-player-price={amount}>
                <Link to="/player" onClick={()=>history.push('/player')} >View Player</Link>
            </div>
    )
}

export default ViewPlayerProfile;