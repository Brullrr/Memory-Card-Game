import classes from './GameBoard.module.css';
import React from 'react';

const GameBoard = (props) => {

    let cardsArray = [...props.cards];

    return (
        <div className={classes.GameBoard}>
            {cardsArray.map((ele) =>{
                console.log(ele)
        return (<div 
            className={classes.Card}
             key={ele} 
             onClick={() => {
            props.clicked(ele)
        }}><img alt='fish' className={classes.Image} src={ele}></img></div>)
    })}
        </div>
    )
}


export default GameBoard;