import React from "react";
import { useState } from "react";
import PlayerList from "./playerList/playerList";
import Viewplayer from "./viewplayer.module.css";

function ViewPlayerProfile() {
    const [isPreviewShown, setPreviewShown] = useState(false);

    const handlePreview=()=>{
        setPreviewShown(true);
    }
    return (
        <div className="col-md-12 d-inline-flex justify-content-center mt-4">
            <div className="container">
                <div className="view-player-profile d-inline-flex flex-wrap col-md-12 justify-content-start">
                    <span className={Viewplayer.playerBtn} onClick={handlePreview}>View Player&nbsp;</span>
                </div>
                {isPreviewShown && <PlayerList/>}
            </div>
        </div>
    )
}

export default ViewPlayerProfile;