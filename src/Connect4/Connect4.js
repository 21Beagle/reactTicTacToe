import React from 'react';
import { useState } from 'react/cjs/react.development';
import SinglePlayerConnect4 from '../SinglePlayerConnect4/SinglePlayerConnect4';
import TwoPlayerConnect4 from '../TwoPlayerConnect4/TwoPlayerConnect4'


function Connect4() {
    const [gameMode, setGameMode] = useState("")

    let game

    if (gameMode === "two-player") {
        game = <TwoPlayerConnect4 />
    } else if (gameMode === "single-player") {
        game = <SinglePlayerConnect4 />
    } else if (gameMode === "") {
        game = <>
            <button className="choose-game-button" onClick={() => chooseGameMode("single-player")}> Single Player Game</button>
            <button className="choose-game-button" onClick={() => chooseGameMode("two-player")}> Two Player Game </button>
        </>
    }

    function chooseGameMode(gameMode) {
        setGameMode(gameMode)
    }

    return <div>
        <h1 className="header"> Connect 4 </h1>
        {game}
    </div >;;
}

export default Connect4;
