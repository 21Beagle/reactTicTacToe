
import React, { useEffect, useState } from 'react';
import Tile from '../Tile/Tile'
import { checkIfWin } from '../util/checkIfWin';
import "./Board.css"


export default function Board(props) {
    const [board, setBoard] = useState(Array(9))
    const [history, setHistory] = useState([])
    const [playerMove, setPlayerMove] = useState("X")
    const [winner, setWinner] = useState({ winner: "" })

    let textStyles 
    let overlayStyles 
    let winnerText

    if (winner.winner) {
        textStyles = `winner ${winner.winner}`
        winnerText = "wins the game!"
        overlayStyles = "overlayOn"
    } else {
        overlayStyles = "hidden"
    }

    useEffect(() => {
        console.log("Winner changed", winner.winner)
    }, [winner.winner]);

    function handleBoardChange(index) {
        if (!history.includes(index)) {
            if (playerMove == "X") {
                board[index] = "X"
                setPlayerMove("O")
            } else {
                board[index] = "O"
                setPlayerMove("X")
            }
            history.push(index)
            setBoard([...board])
            setHistory([...history])
        }
        if (checkIfWin(board)) {
            setWinner(checkIfWin(board))
        } else {
            setWinner({ winner: "" })
        }
    }

    function undo() {
        if (history) {
            var mostRecentMoveIndex = history.pop()
            setPlayerMove(board[mostRecentMoveIndex])
            board[mostRecentMoveIndex] = null
            setHistory([...history])
            setBoard([...board])
            if (checkIfWin(board)) {
                setWinner(checkIfWin(board))
            } else {
                setWinner({ winner: "" })
            }
        }
    }

    function resetGame() {
        setBoard(Array(9))
        setHistory([])
        setPlayerMove("X")
        setWinner({ winner: "" })
    }

    return <div>
        <div className="board">
            <Tile tile_id="0" changeBoard={(index) => handleBoardChange(index)} sign={board[0]} />
            <Tile tile_id="1" changeBoard={(index) => handleBoardChange(index)} sign={board[1]} />
            <Tile tile_id="2" changeBoard={(index) => handleBoardChange(index)} sign={board[2]} />
            <Tile tile_id="3" changeBoard={(index) => handleBoardChange(index)} sign={board[3]} />
            <Tile tile_id="4" changeBoard={(index) => handleBoardChange(index)} sign={board[4]} />
            <Tile tile_id="5" changeBoard={(index) => handleBoardChange(index)} sign={board[5]} />
            <Tile tile_id="6" changeBoard={(index) => handleBoardChange(index)} sign={board[6]} />
            <Tile tile_id="7" changeBoard={(index) => handleBoardChange(index)} sign={board[7]} />
            <Tile tile_id="8" changeBoard={(index) => handleBoardChange(index)} sign={board[8]} />
        </div>
        <button className="undo-button" onClick={() => undo()}> UNDO </button>
        <div className={overlayStyles}>
            <h2 className={textStyles}>{winner.winner} {winnerText}</h2>
            <button className="reset-button"  onClick={ () => resetGame()}><span>Play again?</span></button>
        </div>
    </div>
}
