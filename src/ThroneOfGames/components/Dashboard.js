import React from 'react'
import { Link } from 'react-router-dom'

export default function Dashboard() {
    return (
        <div className='game-selector-div'>
        <p>
            <Link to='/tic-tac-tyrion' className='game-links'>Tic-Tac-Tyrion</Link>
        </p>
        <p>
            <Link to='/cersei-says' className='game-links'>Cersei Says</Link>

        </p>
        <p>
            <Link to='/connect-four-houses' className='game-links'>Connect Four Houses</Link>

        </p>
        </div>
    )
    }
