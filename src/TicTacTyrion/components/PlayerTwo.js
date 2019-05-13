import React from 'react'

export default function PlayerTwo({ characters, playerOne, playerTwo, setPlayer, turn}) {
    const characterList = characters.filter(character => (
        character[0] !== playerOne
    ))
    characterList.sort()
    return (
        <div className='player-div'>
            <h3 className = {!turn ? 'playerTurn' : null}>{playerTwo}</h3>
            <select className='custom-select' onChange={(e) => {
                setPlayer(e.target.value)
            }}
            defaultValue={playerTwo}
            >
            <option key={-1} disabled 
                // selected={playerTwo === "Player Two"} 
                value="Player Two">Select Character
            </option>
                {characterList.map((character) => (
                    <option key={character[1]} value={character[0]}>{character[0]}</option>
                ))}
            </select>
            
        </div>
    )
}