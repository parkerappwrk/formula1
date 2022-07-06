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

    const [isPlayerAdd, setPlayerAdd] = useState(false);
    const [playerPoint, setPlayerPoint] = useState();
    const handleAddPoints=()=>{
        setPlayerAdd(true);
    }
    
    const hideUpdatePlayer=()=>{
        setPlayerAdd(false);
    }
    
    let updatePlayerPoint = (index,value)=>{
        const newplayerList = [...playerList];
        newplayerList[index].points = value;
        setplayer(newplayerList);
    }

    return(
        <div className="col-md-12 mt-4">
            <div className="container">
                <div className="col-md-12 p-0 d-inline-flex justify-content-between">
                    <h4 className="playerTitle text-center">Player Points</h4>
                    {!isPlayerAdd && <span className="updatePlayers btn btn-primary" onClick={handleAddPoints}>Update Players</span>}
                    {isPlayerAdd && <span className="updatePlayers btn btn-danger" onClick={hideUpdatePlayer}>Hide Update</span>}
                </div>
                <div className="col-md-12 p-0 d-inline-flex">
                    <div className="allpayertList pe-3 col-md-6">
                        <div className="playerList-title col-md-12 d-inline-flex mb-4">
                            <h6 className="player-name col-md-6"><b>Name</b></h6>
                            <h6 className="player-points col-md-6 text-end"><b>Points</b></h6>
                        </div>
                        {playerList.map((players, index) => (
                                <div className="player-row d-inline-flex align-items-center col-md-12 p-0 mb-4" id={players.id} index={index}>
                                    <label className="player-name col-md-6">{players.name}</label>
                                    <label className="player-points col-md-6 text-end">{players.points}</label>
                                </div>
                            ))
                        }
                    </div>
                    {isPlayerAdd && <AddPlayerspoint playerList={playerList} updatePlayerPoint={updatePlayerPoint}></AddPlayerspoint>}
                </div>
            </div>
        </div>
    )
}

export default PlayerUpdateScore;