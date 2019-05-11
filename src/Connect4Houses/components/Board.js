import React from 'react'

export default function Board({board, clickHandler, playerOneName, playerTwoName}) {

    const player1png = "./imgs/fire-circle.gif" ;
    // const player1png = `./imgs/${replaceSpaceWithHyphen(playerOneName)}.png`
    const player2png = "./imgs/ice.gif";
    // const player2png = `./imgs/${replaceSpaceWithHyphen(playerTwoName)}.png`
    const blank = "./imgs/blank.png";

const cellNames =    
[   'A5','B5','C5','D5','E5','F5','G5',
    'A4','B4','C4','D4','E4','F4','G4', 
    'A3','B3','C3','D3','E3','F3','G3', 
    'A2','B2','C2','D2','E2','F2','G2', 
    'A1','B1','C1','D1','E1','F1','G1', 
    'A0','B0','C0','D0','E0','F0','G0', ]


    return (

        <div className="masterGrid">
            <div className="dropArea"
                onMouseOver={(e) => {
                    console.log("on mouse over: ", e);
                }}
                
                > </div>

                
                    <div className='connect4housesBoard'>
                    {/* backgroundImage='./imgs/rockwall.png' > */}
                
                    {cellNames.map((square,i) => (
                        <div className='connect4housesSquare' 
                            key={i}
                            onClick={()  => {
                                if (board[square] === null) {          
                                clickHandler(square)
                                }
                            }}>
                            {/* {square} */}
                        <img 
                            className={board[square] === 'O' ? "flipped" : ""}
                            src={board[square] ? ( board[square] === 'X' ? player1png : player2png) : blank} 
                            alt="fireOrIceGif" />
                        </div>

                    ))}
                    
                    </div>

        </div>
    )
}


