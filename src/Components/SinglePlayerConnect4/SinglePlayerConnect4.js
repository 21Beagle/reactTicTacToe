import React from 'react';
import { useState } from 'react/cjs/react.development';
import '../TwoPlayerConnect4/TwoPlayerConnect4.css'
import Connect4Column from '../Connect4Column/Connect4Column';
import { connect4CheckIfWin } from '../../util/connect4CheckIfWin';

function SinglePlayerConnect4() {
    const [board, setBoard] = useState(Array.from(
        { length: 7 }, v => Array.from(
            { length: 6 }, v => ""
        )
    ))
    const [colCount, setColCount] = useState(Array.from(
        { length: 7 }, v => 6
    ))
    const [playerTurn, setPlayerTurn] = useState("R")

    const [winner, setWinner] = useState(false)

    function decrement(column_id) {
        colCount[column_id] = colCount[column_id] - 1
        setColCount([...colCount])
    }

    async function dropTile(column_id) {
        if (colCount[column_id] > 0) {
            console.log("sss")
            decrement(column_id)
            var newBoard = board
            var verticalAxis = colCount[column_id]
            newBoard[column_id][verticalAxis] = playerTurn
            setBoard([...newBoard])
            setWinner(connect4CheckIfWin(board))
            computerMove()
        }
    }

    function computerMove() {
        var cpuMove = Math.floor(Math.random() * 7).toString()
        console.log(cpuMove)
        while (isMoveAvailable(cpuMove)) {
            console.log("move not available trying again")
            cpuMove = Math.floor(Math.random() * 7).toString()
            console.log(cpuMove)
        }
        if (playerTurn == "R") {
            var cpuColour = "Y"
        } else {
            var cpuColour = "R"
        }
        decrement(cpuMove)
        var newBoard = board
        var verticalAxis = colCount[cpuMove]
        newBoard[cpuMove][verticalAxis] = cpuColour
        setBoard([...newBoard])
        setWinner(connect4CheckIfWin(board))
    }

    function isMoveAvailable(cpuMove) {
        if (colCount[cpuMove] > 0) {
            return false
        } else return true
    }



    let textStyles
    let overlayStyles
    let winnerText

    if (winner.winner) {
        textStyles = `winner ${winner.winner}-board`
        if (winner.winner === "R") {
            winnerText = "Red wins the game!"
        } else {
            winnerText = "Yellow wins the game!"
        }
        overlayStyles = "overlayOn"
    } else {
        overlayStyles = "hidden"
    }

    function resetGame() {
        setBoard(Array.from(
            { length: 7 }, v => Array.from(
                { length: 6 }, v => ""
            )
        ))
        setWinner({ winner: false })
        setColCount(Array.from(
            { length: 7 }, v => 6
        ))
    }

    return <>
        <div className="connect4-board">
            {board.map((column, key) => {
                return <Connect4Column key={key} column_id={key} playerTurn={playerTurn} column={column} dropTile={(colour) => dropTile(colour)} />;
            })}
        </div><div className={overlayStyles}>
            <h2 className={textStyles}>{winnerText}</h2>
            <button className="reset-button" onClick={() => resetGame()}><span>Play again?</span></button>
        </div>
    </>;
}

export default SinglePlayerConnect4;
