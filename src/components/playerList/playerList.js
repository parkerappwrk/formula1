import React from "react";
import { useState } from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import AddPlayerspoint from "../addPlayerPoint/addPlayerspoint";

function PlayerUpdateScore(prop){
    const [playerList, setplayer] = useState([
        {
            name: "Charles Leclerc",
            points: "20",
            id: 0
        },
        {
            name: "Carlos Sainz",
            points: "25",
            id: 1
        },
        {
            name: "Alex Albon",
            points: "43",
            id: 2
        },
        {
            name: "Lance Latifi",
            points: "45",
            id: 3
        }
    ]);

    return(
        <div className="col-md-12">
            <div className="container">
                <div className="allpayertList col-md-12 p-0">
                    <AddPlayerspoint playerList={playerList}></AddPlayerspoint>
                    <div className="playerList-title col-md-12">
                        <h1 className="playerTitle col-md-12 text-center">{prop.title}</h1>
                        <label className="player-name col-md-6">Name</label>
                        <label className="player-points col-md-6">Points</label>
                    </div>
                    {playerList.map((players, index) => (
                            <div key={index} className="player-row d-inline-flex align-items-center col-md-12 p-0" id={players.id} index={index}>
                                <label className="player-name col-md-6">{players.name}</label>
                                <label className="player-points col-md-6">{players.points}</label>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default PlayerUpdateScore;