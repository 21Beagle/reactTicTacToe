import React from 'react'
import DotsAndBoxesTile from '../DotsAndBoxesTile/DotsAndBoxesTile'
import './DotsAndBoxesColumn.css'

function DotsAndBoxesColumn(props) {
    // pass the function arguments up to the parent
    function handleClick(coordinates, direction) {
        props.handleClick(coordinates, direction)
    }
    return (
        <div className='DotsAndBoxesRow'>
            {
                props.row.map((value, key) => {
                    return <DotsAndBoxesTile key={key} column_id={props.column_id} row_id={key} tile={value} playerTurn={props.playerTurn} handleClick={(coordinates, direction) => handleClick(coordinates, direction)} />
                })
            }
        </div>
    )
}

export default DotsAndBoxesColumn