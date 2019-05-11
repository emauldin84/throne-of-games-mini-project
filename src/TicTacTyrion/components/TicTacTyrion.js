import React, { Component } from 'react'
import Board from './Board'
import Result from './Result';
import characters from './characters.js'
import PlayerOne from './PlayerOne'
import PlayerTwo from './PlayerTwo'

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
                'A1': null,
                'A2': null,
                'A3': null,
                'B1': null,
                'B2': null,
                'B3': null,
                'C1': null,
                'C2': null,
                'C3': null,
            },
            turnCounter: 0,
            winner: null, // after turnCounter = 9 check array, then result in 'draw' if no arrays === true. Otherwise, 'player one' or 'player two' 

        }
    }

    render() {
        return (
        <div>
            <h1>Tic-Tac-Tyrion</h1>
            <div className='tic-tac-tyrion-container'>
                <PlayerOne 
                    characters={characters} 
                    playerOne={this.state.playerOneName} 
                    playerTwo={this.state.playerTwoName}
                    turn={this.state.isPlayerOneTurn}
                    setPlayer={this._setPlayerOneName}/>
                <Board 
                    board={this.state.board} 
                    clickHandler={this._setCell}
                    playerOneName={this.state.playerOneName}
                    playerTwoName={this.state.playerTwoName} />
                <PlayerTwo 
                    characters={characters} 
                    playerOne={this.state.playerOneName} 
                    playerTwo={this.state.playerTwoName}
                    turn={this.state.isPlayerOneTurn}
                    setPlayer={this._setPlayerTwoName} />
                {/* Result to display start button or display who won (or lion-scratch) with a play again at end of game */}

            </div>
                <Result 
                    winner={this.state.winner} 
                    clickHandler={this._newGame}/> 
        
        </div>
        )
    }
    
        _setPlayerOneName = (name) => {
            this.setState ({
                playerOneName: name,
            })
        }
        
        _setPlayerTwoName = (name) => {
            this.setState ({
                playerTwoName: name,
            })
        }

        _setCell = (cell) => {
            // sets value of cell depending on the player turn
            if (!this.state.winner) {

                    const tempBoard = {...this.state.board}
                    if (this.state.isPlayerOneTurn) {
                        tempBoard[cell] = 'X'
                    } else {
                        tempBoard[cell] = 'O'
                    }
                    
                    console.log("the current board", this.state.board)
            
                    const Row1 = [tempBoard.A1, tempBoard.B1, tempBoard.C1]
                    const Row2 = [tempBoard.A2, tempBoard.B2, tempBoard.C2]
                    const Row3 = [tempBoard.A3, tempBoard.B3, tempBoard.C3]
                    const Col1 = [tempBoard.A1, tempBoard.A2, tempBoard.A3]
                    const Col2 = [tempBoard.B1, tempBoard.B2, tempBoard.B3]
                    const Col3 = [tempBoard.C1, tempBoard.C2, tempBoard.C3]
                    const Diag1 = [tempBoard.A1, tempBoard.B2, tempBoard.C3]
                    const Diag2 = [tempBoard.A3, tempBoard.B2, tempBoard.C1]
            
                    let winner = this.state.winner
                    if (checkArrayForWin(Row1)|| checkArrayForWin(Row2) || checkArrayForWin(Row3) ||
                    checkArrayForWin(Col1) || checkArrayForWin(Col2) || checkArrayForWin(Col3) ||
                    checkArrayForWin(Diag1) || checkArrayForWin(Diag2) ) {
                        //if true for any one array - there is a winner
                        if (this.state.isPlayerOneTurn) {
                            winner = this.state.playerOneName;
                        }
                        else {
                            winner = this.state.playerTwoName;
                        }
                        
                    }

                    if ((this.state.turnCounter === 8) && (winner === null)) {
                        winner = "Lion Scratch";
                    }

                    // else {
                    //     //no winner
                    //     counter +1 unloess at 9
                    // }

                    // set turn counter
                        
                    // set player turn
                    // set winner

                    this.setState({
                        board: tempBoard,
                        turnCounter: this.state.turnCounter + 1,
                        isPlayerOneTurn: !this.state.isPlayerOneTurn,
                        winner: winner,
                        })
                        
                }

            }
        _newGame = () => {
            //not changing player names
            this.setState({
                isPlayerOneTurn: true,
                // Letters for columns, numbers for rows
                // There will be eight arrays containing the board values ('X', 'O' or null) that will be checked after each turn. 
                board: {
                    'A1': null,
                    'A2': null,
                    'A3': null,
                    'B1': null,
                    'B2': null,
                    'B3': null,
                    'C1': null,
                    'C2': null,
                    'C3': null,
                },
                turnCounter: 0,
                winner: null,  
            })
        }

    

    
}


//helper function
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
