import React from 'react';
import "./Connect4Column.css"
import Connect4Tile from '../Connect4Tile/Connect4Tile'

function Connect4Column(props) {

    let styles

    if (props.playerTurn == "R") {
        styles = "connect4-drop-button red-text" 
    } else {
        styles = "connect4-drop-button yellow-text"
    }


    return <div className="connect4-column">
        {props.column.map((tile, key) => {
            return <>
                <Connect4Tile key={key} colour={tile} />
            </>
        })}
        <button className={`${styles}`} key={props.column_id} onClick={()=>props.dropTile(props.column_id)}>
            <span className="drop-span">Click here</span>
            </button>
    </div>;
}

export default Connect4Column;
