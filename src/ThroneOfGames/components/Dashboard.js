import React from 'react'
import { Link } from 'react-router-dom'

export default function Dashboard() {
    return (
        <div className='game-selector-div'>
            <Link to='/tic-tac-tyrion' className='game-links'>Tic-Tac-Tyrion</Link>
            <br></br>
            <Link to='/cersei-says' className='game-links'>Cersei Says</Link>
            <br></br>
            <Link to='/connect-four-houses' className='game-links'>Connect Four Houses</Link>
        </div>
    )
    }
