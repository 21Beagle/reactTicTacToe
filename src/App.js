import logo from './logo.svg';
import './App.css';
import TicTacToe from './TicTacToe/TicTacToe';
import Connect4 from './Connect4/Connect4';
import { useState } from 'react';

function App() {
    const [gameChoice, setGameChoice] = useState("")
    let game


    function chooseGame(chosenGame) {
        setGameChoice(chosenGame)
    }

    if (gameChoice == "") {
        game = <>
            <button className="choose-game-button" onClick={() => chooseGame("tic-tac-toe")}>Tic Tac Toe</button>
            <button className="choose-game-button" onClick={() => chooseGame("connect-4")}>Connect4</button>
        </>
    } else if (gameChoice == "tic-tac-toe") {
        game = <TicTacToe />
    } else if (gameChoice == "connect-4") {
        game = <Connect4 />
    }

    return (
        <div>
            <button className="home-button"onClick={()=>chooseGame("")}>Home</button>
            {game}
        </div>
    );
}

export default App;
