import React from 'react';
import './Connect4Tile.css'

function Connect4Tile(props) {
    let styles
    if (props.colour === "R") {
        styles = "connect4-tile-red"
    } else if (props.colour === "Y") {
        styles = "connect4-tile-yellow"
    } else {
        styles = ""
    }
    return <div className={`connect4-tile ${styles}`} ></div>;
}

export default Connect4Tile;
