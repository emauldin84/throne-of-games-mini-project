import React from 'react'
import { Link } from 'react-router-dom'

export default function Dashboard() {
    return (
        <div>
            <Link to='/tic-tac-tyrion'>Tic-Tac-Tyrion</Link>
            <br></br>
            <Link to='/cersei-says'>Cersei Says</Link>
            <br></br>
            <Link to='/connect-four-houses'>Connect Four Houses</Link>
        </div>
    )
    }
