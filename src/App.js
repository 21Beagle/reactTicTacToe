import './App.css';
import TicTacToe from './Components/TicTacToe/TicTacToe';
import Connect4 from './Components/Connect4/Connect4';
import { useState } from 'react';
import DotsAndBoxes from './Components/DotsAndBoxes/DotsAndBoxes';

function App() {
    const [gameChoice, setGameChoice] = useState("")
    let game


    function chooseGame(chosenGame) {
        setGameChoice(chosenGame)
    }

    if (gameChoice === "") {
        game = <>
            <button className="choose-game-button" onClick={() => chooseGame("tic-tac-toe")}>Tic Tac Toe</button>
            <button className="choose-game-button" onClick={() => chooseGame("connect-4")}>Connect4</button>
            <button className="choose-game-button" onClick={() => chooseGame("dots-and-boxes")}>Dots and Boxes</button>
        </>
    } else if (gameChoice === "tic-tac-toe") {
        game = <TicTacToe />
    } else if (gameChoice === "connect-4") {
        game = <Connect4 />
    } else if (gameChoice === "dots-and-boxes") {
        game = <DotsAndBoxes />
    }

    return (
        <div className='app'>
            <button className="home-button" onClick={() => chooseGame("")}>Home</button>
            {game}
        </div>
    );
}

export default App;
