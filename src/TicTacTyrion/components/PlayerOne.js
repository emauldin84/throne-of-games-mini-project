import React from 'react'

export default function PlayerOne({ characters, playerOne, playerTwo, setPlayer, turn}) {
    const characterList = characters.filter(character => (
        character !== playerTwo
    ))
    characterList.sort()
    
    return (
        <div>
            <select onChange={(e) => {
                setPlayer(e.target.value)
            }}
            defaultValue={playerOne}
            >
            <option key={-1} disabled 
                // selected={playerOne === "Player One"} 
                value="Player One">Select Character</option>
                {characterList.map((character,i) => (
                    <option key={i} value={character}>{character}</option>
                ))}
            </select>

            <h3 className = {turn ? 'playerTurn' : null}>{playerOne}</h3>
        </div>
    )
}

