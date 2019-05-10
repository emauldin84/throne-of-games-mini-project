import React from 'react'

export default function Board({board, clickHandler, checkWinner}) {

    //we have to set these based on the player1 and player2 and fill in the spaces with hyphens.  
    //but it works!
    const player1png = "./imgs/Arya-Stark.png" ;
    const player2png = "./imgs/The-Hound.png";
    const blank = "./imgs/blank.png";

    return (
        <div className='ticTacToeBoard'>
            <div className='ticTacToeSquare' onClick={()  => {
                if (board.A1 === null) {
                clickHandler('A1')
                }
            // }}>{board.A1}</div>    
            }}>
            <img src={board.A1 ? ( board.A1 === 'X' ? player1png : player2png) : blank} alt="sprite" />
            </div>

            <div className='ticTacToeSquare' onClick={()  => {
                if (board.B1 === null) {

                clickHandler('B1')
                }
            }}>
            <img src={board.B1 ? ( board.B1 === 'X' ? player1png : player2png) : blank} alt="sprite" />
            </div>

            <div className='ticTacToeSquare' onClick={()  => {
                if (board.C1 === null) {

                clickHandler('C1')
                }
            }}>
            {/* {board.C1} */}
            <img src={board.C1 ? ( board.C1 === 'X' ? player1png : player2png) : blank} alt="sprite" />
            </div>

            <div className='ticTacToeSquare' onClick={()  => {
                if (board.A2 === null) {
                    clickHandler('A2')
                }
            }}>
            {/* {board.A2} */}
            <img src={board.A2 ? ( board.A2 === 'X' ? player1png : player2png) : blank} alt="sprite" />
            </div>

            <div className='ticTacToeSquare' onClick={()  => {
                if (board.B2 === null) {

                clickHandler('B2')
                }
            }}>
            {/* {board.B2} */}
            <img src={board.B2 ? ( board.B2 === 'X' ? player1png : player2png) : blank} alt="sprite" />
            </div>
            <div className='ticTacToeSquare' onClick={()  => {
                if (board.C2 === null) {

                clickHandler('C2')
                }
            }}>
            {/* {board.C2} */}
            <img src={board.C2 ? ( board.C2 === 'X' ? player1png : player2png) : blank} alt="sprite" />
            </div>
            <div className='ticTacToeSquare' onClick={()  => {
                if (board.A3 === null) {

                clickHandler('A3')
                }
            }}>
            {/* {board.A3} */}
            <img src={board.A3 ? ( board.A3 === 'X' ? player1png : player2png) : blank} alt="sprite" />

            </div>
            <div className='ticTacToeSquare' onClick={()  => { 
                if (board.B3 === null) {

                clickHandler('B3')
                }
            }}>
            {/* {board.B3} */}
            <img src={board.B3 ? ( board.B3 === 'X' ? player1png : player2png) : blank} alt="sprite" />

            </div>
            <div className='ticTacToeSquare' onClick={()  => {
                if (board.C3 === null) {

                clickHandler('C3')
                }
            }}>
            {/* {board.C3} */}
            <img src={board.C3 ? ( board.C3 === 'X' ? player1png : player2png) : blank} alt="sprite" />
            </div>
        </div>
    )
}




