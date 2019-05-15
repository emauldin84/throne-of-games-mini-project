import React from 'react'

export default function RoundCounter({round}) {
    return (
        <div>
            <div className='roundCounter'>
                {round ? `Round: ${round}` : '' }
            </div>
        </div>
    )
}
