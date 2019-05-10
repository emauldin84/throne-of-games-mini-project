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
            console.log("the current board", this.state.board)
        
        }

        _checkForWinner = () => {

            const Row1 = [this.state.board.A1, this.state.board.B1, this.state.board.C1]
            const Row2 = [this.state.board.A2, this.state.board.B2, this.state.board.C2]
            const Row3 = [this.state.board.A3, this.state.board.B3, this.state.board.C3]
console.log(this.state.board);
            let winner = this.state.winner
            if (checkArrayForWin(Row1) || checkArrayForWin(Row2) || checkArrayForWin(Row3)) {
                //if true for any one array - there is a winner
                if (this.state.isPlayerOneTurn) {
                     winner = "Player 1"
                }
                else {
                     winner = "Player 2"
                }
                
            }
            console.log("the winner is ", winner);
            // else {
            //     //no winner
            //     counter +1 unloess at 9
            // }

            // set turn counter
                
            // set player turn
            // set winner
            this.setState({

                // turnCounter: ,
                isPlayerOneTurn: !this.state.isPlayerOneTurn,
                winner: winner,


            })
        }

        _newGame = () => {
            // reset board
            // reset counter
            // keep player names?
        }

    

    }

function checkArrayForWin(array) {
    console.log(array[0], array[1], array[2])
    if ((array[0] === array[1]) && (array[1] === array[2]) &&  (array[0] !== null)) {
        console.log("they are the same")
        return true;
        
    }
    else {
        console.log("they are not the same")
        return false;
    }
}
