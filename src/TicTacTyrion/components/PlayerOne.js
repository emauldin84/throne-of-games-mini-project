import React from 'react'

export default function PlayerOne({ characters, playerOne, playerTwo, setPlayer}) {
    const characterList = {characters}.filter(character => (
        character !== {playerTwo}
    ))
    characterList.sort()
    return (
        <div>
            <select onChange={(e) => {
                setPlayer(e.target.value)
            }}>
            <option disabled value>Select Character</option>
                {characterList.map(character => (
                    <option value={character}>{character}</option>
                ))}
            </select>
        </div>
    )
}
