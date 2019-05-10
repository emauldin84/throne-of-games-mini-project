import React from 'react'

export default function Board({board, clickHandler, checkWinner}) {
    return (
        <div className='ticTacToeBoard'>
            <div className='ticTacToeSquare' onClick={()  => {
                if (board.A1 === null) {

                clickHandler('A1')
                }
            }}>{board.A1}</div>
            <div className='ticTacToeSquare' onClick={()  => {
                if (board.B1 === null) {

                clickHandler('B1')
                }
            }}>{board.B1}</div>
            <div className='ticTacToeSquare' onClick={()  => {
                if (board.C1 === null) {

                clickHandler('C1')
                }
            }}>{board.C1}</div>
            <div className='ticTacToeSquare' onClick={()  => {
                if (board.A2 === null) {
                    clickHandler('A2')
                }
            }}>{board.A2}</div>
            <div className='ticTacToeSquare' onClick={()  => {
                if (board.B2 === null) {

                clickHandler('B2')
                }
            }}>{board.B2}</div>
            <div className='ticTacToeSquare' onClick={()  => {
                if (board.C2 === null) {

                clickHandler('C2')
                }
            }}>{board.C2}</div>
            <div className='ticTacToeSquare' onClick={()  => {
                if (board.A3 === null) {

                clickHandler('A3')
                }
            }}>{board.A3}</div>
            <div className='ticTacToeSquare' onClick={()  => { 
                if (board.B3 === null) {

                clickHandler('B3')
                }
            }}>{board.B3}</div>
            <div className='ticTacToeSquare' onClick={()  => {
                if (board.C3 === null) {

                clickHandler('C3')
                }
            }}>{board.C3}</div>
        </div>
    )
}




