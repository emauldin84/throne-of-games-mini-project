import React from 'react'

export default function RoundCounter({round}) {
    return (
        <div>
            <div className={round?'roundCounter':''}>
                {round ? `Round: ${round}` : '' }
            </div>
        </div>
    )
}
