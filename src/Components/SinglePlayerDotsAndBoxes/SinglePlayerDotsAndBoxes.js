import React, { useState } from 'react';
import DotsAndBoxesColumn from '../DotsAndBoxesColumn/DotsAndBoxesColumn'
import './SinglePlayerDotsAndBoxes.css'
import { DotAndBoxesBoard } from '../../util/DotsAndBoxesClass';

function SinglePlayerDotsAndBoxes() {

    const [game, setGame] = useState(new DotAndBoxesBoard(5, 4))
    const [playerTurn, setPlayerTurn] = useState("B")

    function handleClick(coordinates, direction) {
        console.log(coordinates, direction, playerTurn)
        game.DrawLine(coordinates, direction, playerTurn)
        changePlayer()
    }

    function changePlayer() {
        playerTurn === "B" ? setPlayerTurn("G") : setPlayerTurn("B")
    }

    console.log(game)

    return <div className='DotsAndBoxesBoard-outer'>
        <div className='DotsAndBoxesBoard-inner'>
            {
                game.board.map((value, key) => {
                    return <DotsAndBoxesColumn row={value} column_id={key} key={key} playerTurn={playerTurn} handleClick={(coordinates, direction) => handleClick(coordinates, direction)} />
                })
            }
        </div>
    </div>;
}

export default SinglePlayerDotsAndBoxes;



// red vs blue

// each tile has data: north, east, south, west, fill