import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state/index";
import addPlayer from "./addPlayer.module.css";


function AddPlayerspoint(props){
    const [value, setValue] = useState("");
    const dispatch = useDispatch();
    const action = bindActionCreators(actionCreators, dispatch);



    const handleSubmit = e => {
        e.preventDefault();
        let id = e.target.id;
        if (!value) return;
        action.updatePoints(value,id);
    };

    return(
        <div className="updateRacePoints col-md-6 ps-3">
            <h5 className="update-title text-center mb-3">Update Race Points</h5>
            {props.playerList.map((players, index) => (
                    <div className="updatePlayerPoint col-md-12 mb-3" key={index}>
                        <form className="update-row col-md-12 d-inline-flex align-items-center justify-content-between" id={players.id} onSubmit={handleSubmit}>
                            <label className="updateName col-md-4">{players.name}</label>
                            <div className="col-md-8">
                                <input type="text" placeholder="Enter Points" value={players.point} onChange={e => setValue(e.target.value)} className={`col-md-7 ${addPlayer.updateInput}`}/>
                                <div className="d-inline-flex justify-content-end ms-4">
                                    <button className="btn btn-sm btn-primary">Update Points</button>
                                </div>
                            </div>
                        </form>
                    </div>
                ))
            }
        </div>
    )
}

export default AddPlayerspoint;