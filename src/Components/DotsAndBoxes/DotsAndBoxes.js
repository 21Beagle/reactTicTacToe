import { useState } from "react/cjs/react.development";
import React from 'react';
import SinglePlayerDotsAndBoxes from "../SinglePlayerDotsAndBoxes/SinglePlayerDotsAndBoxes";
import TwoPlayerDotsAndBoxes from "../TwoPlayerDotsAndBoxes/TwoPlayerDotsAndBoxes";


function DotsAndBoxes() {
    const [gameMode, setGameMode] = useState("")

    function chooseGameMode(gameMode) {
        setGameMode(gameMode)
    }

    let game
    if (gameMode === "two-player") {
        game = <TwoPlayerDotsAndBoxes />
    } else if (gameMode === "single-player") {
        game = <SinglePlayerDotsAndBoxes />
    } else if (gameMode === "") {
        game = <>
            <button className="choose-game-button" onClick={() => chooseGameMode("single-player")}> Single Player</button>
            <button className="choose-game-button" onClick={() => chooseGameMode("two-player")}> Two Player Game </button>
        </>
    }
    return <div>
        <h1 className="header"> Dots and Boxes </h1>
        {game}
    </div >;;
}

export default DotsAndBoxes;
