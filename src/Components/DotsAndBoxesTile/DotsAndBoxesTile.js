import React from 'react'
import './DotsAndBoxesTile.css'

function DotsAndBoxesTile(props) {

    let north = props.tile.geometry.north
    let south = props.tile.geometry.south
    let east = props.tile.geometry.east
    let west = props.tile.geometry.west

    let fill = props.tile.fill
    let fillStyle

    if (fill === "G") {
        fillStyle = "fill-green"
    } else if (fill === "B") {
        fillStyle = "fill-blue"
    } else {
        fillStyle = ""
    }

    let playerTurn = props.playerTurn
    let playerTurnStyle
    if (playerTurn === "B") {
        playerTurnStyle = "player-turn-blue"
    } else {
        playerTurnStyle = "player-turn-green"
    }

    let coordinates = [props.column_id, props.row_id]

    let topButtons = <></>
    let middleButtons = <div className='DotsAndBoxesEastWest'><button className={`west-button ${playerTurnStyle} ${west}`} onClick={() => props.handleClick(coordinates, "W")} /><div className={`centerTile ${fillStyle}`}></div></div>
    let bottomButtons = <div className='DotsAndBoxesSouth'><div className='Dot bottom-left'></div> <button className={`south-button ${playerTurnStyle} ${south}`} onClick={() => props.handleClick(coordinates, "S")} /></div>

    if (props.row_id === 3) {
        topButtons = <div className='DotsAndBoxesNorth'><div className='Dot top-left'></div><button className={`north-button ${playerTurnStyle} ${north}`} onClick={() => props.handleClick(coordinates, "N")} /></div>
    }

    if (props.column_id === 4) {
        middleButtons = <div className='DotsAndBoxesEastWest'><button className={`west-button ${playerTurnStyle} ${west}`} onClick={() => props.handleClick(coordinates, "W")} /><div className={`centerTile ${fillStyle}`}></div><button className={`east-button ${playerTurnStyle} ${east}`} onClick={() => props.handleClick(coordinates, "E")} /></div>
        bottomButtons = <div className='DotsAndBoxesSouth'>
            <div className='Dot bottom-left'></div> <button className={`south-button ${playerTurnStyle} ${south}`} onClick={() => props.handleClick(coordinates, "S")} /> <div className='Dot bottom-right'></div>
        </div>
    }

    if (props.column_id === 4 && props.row_id === 3) {
        topButtons = <div className='DotsAndBoxesNorth'><div className='Dot top-left'></div><button className={`north-button ${playerTurnStyle} ${north}`} onClick={() => props.handleClick(coordinates, "N")} /> <div className='Dot top-right'></div></div>
    }



    return (
        <div className='DotsAndBoxesTile'>

            {topButtons}


            {middleButtons}

            {bottomButtons}

        </div>
    )
}

export default DotsAndBoxesTile