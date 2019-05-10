import React from 'react'

export default function Result({winner, clickHandler}) {
  return (
    <div>
        <h1>{winner} {((winner === null) || (winner === "Lion Scratch")) ? "" : "Wins"}</h1>
      <button onClick={clickHandler}>New Game?</button>
    </div>
  )
}
