import React, { Component } from 'react'
import Board from './Board'


export default class TicTacTyrion extends Component {
    constructor(props) {
        super(props)
        this.state = {
            playerOneName: 'Player One', // player one is always 'X'
            playerTwoName: 'Player Two', // player two is always 'O'
            isPlayerOneTurn: false,
            // Letters for columns, numbers for rows
            // There will be eight arrays containing the board values ('X', 'O' or null) that will be checked after each turn. 
            board: {
                'A1': 'A1',
                'A2': 'A2',
                'A3': 'A3',
                'B1': 'B1',
                'B2': 'B2',
                'B3': 'B3',
                'C1': 'C1',
                'C2': 'C2',
                'C3': 'C3',
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
            <Board board={this.state.board} clickHandler={this._setCell} checkWinner={this._checkForWinner}/>
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

        _setCell = (cell) => {
            // sets value of cell depending on the player turn
            const tempBoard = {...this.state.board}
            if (this.state.isPlayerOneTurn) {
                tempBoard[cell] = 'X'
            } else {
                tempBoard[cell] = 'O'
            }
            this.setState({
                board: tempBoard,
                
            })
            console.log(tempBoard)
        
        }

        _checkForWinner = () => {
            // set turn counter
                
            // set player turn
            // set winner
            this.setState({

                turnCounter: ,
                isPlayerOneTurn: !isPlayerOneTurn,
                winner: ,


            })
        }

        _newGame = () => {
            // reset board
            // reset counter
            // keep player names?
        }

    

    }
