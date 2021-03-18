import React, { useState, useEffect } from 'react';
import classes from './Timer.module.css';


const Timer = (props) => {

    const [seconds, setSeconds] = useState(10) 

    useEffect(()=>{  
        let myInterval = setInterval(()=> {
                            if (seconds <= 0) {
                                clearInterval(myInterval)
                                props.TimerEnded();

                            } else {
                                setSeconds(seconds - 1);
                                console.log(seconds)
                            }
                        }, 1000)
        return () => {
            clearInterval(myInterval)
        }
    })


    
    return (
        <div className={classes.TimerContainer}>{seconds}</div>)
}

export default Timer;