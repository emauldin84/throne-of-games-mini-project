import React, { Component } from 'react'
import Board from './Board'


export default class TicTacTyrion extends Component {
    constructor(props) {
        super(props)
        this.state = {
            playerOneName: 'Player One', // player one is always 'X'
            playerTwoName: 'Player Two', // player two is always 'O'
            isPlayerOneTurn: true,
            // Letters for columns, numbers for rows
            // There will be eight arrays containing the board values ('X', 'O' or null) that will be checked after each turn.  
            board: {
                'A1': 'X',
                'A2': 'O',
                'A3': 'X',
                'B1': 'O',
                'B2': 'X',
                'B3': 'O',
                'C1': 'X',
                'C2': 'O',
                'C3': 'X',
            },
            turnCounter: 0,
            winner: null, // after turnCounter = 9 check array, then result in 'draw' if no arrays === true. Otherwise, 'player one' or 'player two'
            

        }
    }
    render() {
        return (
        <div>
            <h1>TicTacTyrion</h1>
            {/* <PlayerOne /> */}
            <Board board={this.state.board} clickHandler={this.setCell}/>
            {/* <PlayerTwo /> */}
            {/* Result to display start button or display who won (or lion-scratch) with a play again at end of game */}
            {/* <Result />  */}
        
        </div>
        )
    }
    
        _setPlayerOneName = () => {
            
        }
        
        _setPlayerTwoName = () => {

        }

        _setCell = () => {
            // sets value of cell depending on the player turn
        
        }

        _checkForWinner = () => {
            // set turn counter
            // set player turn
            // set winner
        }

        _newGame = () => {
            // reset board
            // reset counter
            // keep player names?
        }

    

    }
