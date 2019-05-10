import React from 'react'

export default function PlayerTwo({ characters, playerOne, playerTwo, setPlayer }) {
    const characterList = characters.filter(character => (
        character !== playerOne
    ))
    characterList.sort()
    return (
        <div>
            <select onChange={(e) => {
                setPlayer(e.target.value)
            }}>
            <option disabled selected value>Select Character</option>
                {characterList.map(character => (
                    <option value={character}>{character}</option>
                ))}
            </select>
            <h3>Player Two: {playerTwo}</h3>
        </div>
    )
}