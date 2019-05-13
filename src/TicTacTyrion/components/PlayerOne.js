import React from 'react'

export default function PlayerOne({ characters, playerOne, playerTwo, setPlayer, turn}) {
    const characterList = characters.filter(character => (
        character[0] !== playerTwo
    ))
    characterList.sort()
    return (
        <div className='player-div'>
            <h3 className={turn ? 'playerTurn' : null}>{playerOne}</h3>
            <select className='custom-select' onChange={(e) => {
                setPlayer(e.target.value)
            }}
            defaultValue={playerOne}
            >
            <option key={-1} disabled 
                // selected={playerOne === "Player One"} 
                value="Player One">Select Character</option>
                {characterList.map((character) => (
                    <option key={character[1]} value={character[0]}>{character[0]}</option>
                ))}
            </select>

            
        </div>
    )
}

