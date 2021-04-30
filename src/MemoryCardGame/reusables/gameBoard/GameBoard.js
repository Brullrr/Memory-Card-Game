import classes from './GameBoard.module.css';
import React from 'react';

const GameBoard = (props) => {

    let cardsArray = [...props.cards];

    let gameboardClass = props.stage === '2' ? props.Lost ? classes.GameBoardStageTwoLose : classes.GameBoardStageTwo : props.Lost ? classes.GameBoardLose : classes.GameBoard


    let gameboardOne =(
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
        </div>)
    
    let moveUp = classes.ImageMoveUp
    let moveDown = classes.ImageMoveDown
    let moveRight = classes.ImageMoveRight
    let moveLeft = classes.ImageMoveLeft
    
    let gameBoardTwo = (
        <div className={gameboardClass}>
            {cardsArray.map((ele) =>{
                let movingNum = Math.floor(Math.random()*4 + 1)
                let move = movingNum === 1 ? moveUp : movingNum === 2 ? moveDown : movingNum === 3 ? moveRight : moveLeft
                return (<div 
                        className={classes.Card}
                        key={ele} 
                        onClick={() => {
                        props.clicked(ele)
                    }}>
                        <img alt='deer' className={move} src={ele} style={
                            {
                                animationDuration: Math.floor(Math.random()*8 + 1)   + 's'
                                
                            }
                        }></img>
                    </div>  
                )
            })}
        </div>)
    
    let theGameBoard = props.stage === '4' ? gameBoardTwo : gameboardOne

    return (
        theGameBoard
    )
}


export default GameBoard;