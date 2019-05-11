import React from 'react'

export default function PlayerTwo({ characters, playerOne, playerTwo, setPlayer, turn}) {
    const characterList = characters.filter(character => (
        character !== playerOne
    ))
    characterList.sort()
    return (
        <div>
            <select onChange={(e) => {
                setPlayer(e.target.value)
            }}
            defaultValue={playerTwo}
            >
            <option key={-1} disabled 
                // selected={playerTwo === "Player Two"} 
                value="Player Two">Select Character
            </option>
                {characterList.map((character,i) => (
                    <option key={i} value={character}>{character}</option>
                ))}
            </select>
            <h3 className = {!turn ? 'playerTurn' : null}>{playerTwo}</h3>
        </div>
    )
}