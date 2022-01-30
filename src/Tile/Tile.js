import React from 'react';
import './Tile.css'

function Tile(props) {

    
    var styles = `tile ${props.sign}`

    let symbol
    
    if (props.sign == "X") {
        symbol = "✕"
    } else if (props.sign == "O") {
        symbol = "○"
    }
    

    return <button className={styles} onClick={ () => props.changeBoard(props.tile_id)  }>
        <span>{symbol}</span> 
    </button>;
}

export default Tile;
