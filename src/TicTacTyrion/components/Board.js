import React from 'react'

export default function Board({board, clickHandler, checkWinner}) {
    return (
        <div className='ticTacToeBoard'>
            <div className='ticTacToeSquare' onClick={()  => {
                clickHandler('A1')
                // checkWinner()
            }}>{board.A1}</div>
            <div className='ticTacToeSquare' onClick={()  => {
                clickHandler('B1')
            }}>{board.B1}</div>
            <div className='ticTacToeSquare' onClick={()  => {
                clickHandler('C1')
            }}>{board.C1}</div>
            <div className='ticTacToeSquare' onClick={()  => {
                clickHandler('A2')
            }}>{board.A2}</div>
            <div className='ticTacToeSquare' onClick={()  => {
                clickHandler('B2')
            }}>{board.B2}</div>
            <div className='ticTacToeSquare' onClick={()  => {
                clickHandler('C2')
            }}>{board.C2}</div>
            <div className='ticTacToeSquare' onClick={()  => {
                clickHandler('A3')
            }}>{board.A3}</div>
            <div className='ticTacToeSquare' onClick={()  => {
                clickHandler('B3')
            }}>{board.B3}</div>
            <div className='ticTacToeSquare' onClick={()  => {
                clickHandler('C3')
            }}>{board.C3}</div>
        </div>
    )
}




