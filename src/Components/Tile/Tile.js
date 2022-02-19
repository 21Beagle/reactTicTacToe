import React from 'react';
import './Tile.css'

function Tile(props) {

    
    var styles = `${props.sign}`

    let symbol
    
    if (props.sign == "X") {
        symbol = "✕"
    } else if (props.sign == "O") {
        symbol = "O"
    }
    

    return <button className="tile" onClick={ () => props.changeBoard(props.tile_id)  }>
        <span className={styles} >{symbol}</span> 
    </button>;
}

export default Tile;
