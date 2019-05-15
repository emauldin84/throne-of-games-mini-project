import React from 'react'



export default function Result({winner, loser, clickHandler}) {
    
    return (
        <div>
            <h1 className={winner || loser ? 'result' : null}>{winner ? (winner ? 'You Win!': '') : (loser ? 'You Lose!' : '') }</h1>
        <button className={winner || loser ? 'pulse' : null} onClick={clickHandler}>New Game</button>
        </div>
    )
}




