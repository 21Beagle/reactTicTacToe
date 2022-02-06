import React, { useEffect } from 'react';
import "./TicTacToe.css"
import { useState } from 'react/cjs/react.development';
import TwoPlayerTicTacToe from '../TwoPlayerTicTacToe/TwoPlayerTicTacToe'
import SinglePlayerTicTacToe from '../SinglePlayerTicTacToe/SinglePlayerTicTacToe';

function TicTacToe(props) {
    const [gameMode, setGameMode] = useState("")


    let game
    if (gameMode == "two-player") {
        game = <TwoPlayerTicTacToe />
    } else if (gameMode == "single-player") {
        game = <SinglePlayerTicTacToe />
    } else if (gameMode == "") {
        game = <>
            <button className="choose-game-button" onClick={() => chooseGameMode("single-player")}> Single Player Game</button>
            <button className="choose-game-button" onClick={() => chooseGameMode("two-player")}> Two Player Game </button>
        </>
    }

    function chooseGameMode(gameMode) {
        setGameMode(gameMode)
    }

return <div>
    <h1 className="header"> Tic Tac Toe </h1>
        {game}
    </div>;
}

export default TicTacToe;
