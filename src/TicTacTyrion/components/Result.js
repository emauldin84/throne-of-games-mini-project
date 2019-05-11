import React from 'react'

export default function Result({winner, clickHandler}) {
    return (
        <div>
            <h1 className={winner ? 'result' : null}>{winner} {((winner === null) || (winner === "Lion Scratch")) ? "" : "Wins"}</h1>
        <button className={winner ? 'pulse' : null} onClick={clickHandler}>New Game</button>
        </div>
    )
}

// {winner ? 'result' : null}