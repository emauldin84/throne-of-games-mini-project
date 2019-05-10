import React from 'react'

export default function Board({board, clickHandler}) {
    return (
        <div className='ticTacToeBoard'>
            <div className='ticTacToeSquare' onClick={clickHandler}>{board.A1}</div>
            <div className='ticTacToeSquare' onClick={clickHandler}>{board.A2}</div>
            <div className='ticTacToeSquare' onClick={clickHandler}>{board.A3}</div>
            <div className='ticTacToeSquare' onClick={clickHandler}>{board.B1}</div>
            <div className='ticTacToeSquare' onClick={clickHandler}>{board.B2}</div>
            <div className='ticTacToeSquare' onClick={clickHandler}>{board.B3}</div>
            <div className='ticTacToeSquare' onClick={clickHandler}>{board.C1}</div>
            <div className='ticTacToeSquare' onClick={clickHandler}>{board.C2}</div>
            <div className='ticTacToeSquare' onClick={clickHandler}>{board.C3}</div>
        </div>
    )
}




