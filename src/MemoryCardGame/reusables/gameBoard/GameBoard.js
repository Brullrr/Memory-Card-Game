import classes from './GameBoard.module.css';
import React from 'react';

const GameBoard = (props) => {

    let cardsArray = [...props.cards];

    let gameboardClass = props.Lost ? classes.GameBoardLose : classes.GameBoard

    return (
        <div className={gameboardClass}>
            {cardsArray.map((ele) =>{
                return (<div 
                            className={classes.Card}
                            key={ele} 
                            onClick={() => {
                            props.clicked(ele)
                        }}>
                            <img alt='fish' className={classes.Image} src={ele}></img>
                        </div>  
                )
            })}
        </div>
    )
}


export default GameBoard;