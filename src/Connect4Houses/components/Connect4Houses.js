import React, { Component } from 'react'
import Board from './Board'
// import Result from './Result';
// import characters from './characters.js'
// import PlayerOne from './PlayerOne'
// import PlayerTwo from './PlayerTwo'

    // Letters for columns, numbers for rows
    // There will be 6+7+12 arrays containing the board values ('X', 'O' or null) that will be checked after each turn. 
    //mao - i'm thinking the columns fill up from the bottom, just like an array...

const  blankBoard = {
    'A0': null,     'B0': null,    'C0': null,   'D0': null,
    'A1': null,     'B1': null,    'C1': null,   'D1': null,
    'A2': null,     'B2': null,    'C2': null,   'D2': null,
    'A3': null,     'B3': null,    'C3': null,   'D3': null,
    'A4': null,     'B4': null,    'C4': null,   'D4': null,
    'A5': null,     'B5': null,    'C5': null,   'D5': null,
    
    'E0': null,     'F0': null,    'G0': null, 
    'E1': null,     'F1': null,    'G1': null, 
    'E2': null,     'F2': null,    'G2': null, 
    'E3': null,     'F3': null,    'G3': null, 
    'E4': null,     'F4': null,    'G4': null, 
    'E5': null,     'F5': null,    'G5': null, 
}

export default class TicTacTyrion extends Component {
    constructor(props) {
        super(props)
        this.state = {
            playerOneName: 'Fire', // player one is always 'X'
            playerTwoName: 'Ice', // player two is always 'O'
            isPlayerOneTurn: true,
            board: blankBoard,
            turnCounter: 0,  //max is 6*7 = 42
            winner: null, // after turnCounter = 42 check array, then result in 'draw' if no arrays === true. Otherwise, 'player one' or 'player two' 

        }
    }

    render() {
        return (
        <div>
            <h1>Connect 4 Houses</h1>
            <div className='connect-4-houses-container'>
                {/* <PlayerOne characters={characters} 
            playerOne={this.state.playerOneName} 
            playerTwo={this.state.playerTwoName} s
            etPlayer={this._setPlayerOneName}/> */}

                <Board board={this.state.board} 
                            clickHandler={this._setCell}
                            playerOneName={this.state.playerOneName}
                            playerTwoName={this.state.playerTwoName} />

                {/* <PlayerTwo characters={characters} 
                    playerOne={this.state.playerOneName} 
                    playerTwo={this.state.playerTwoName} 
                    setPlayer={this._setPlayerTwoName}/> */}

                {/* Result to display start button or display who won  with a play again at end of game */}

            </div>
                {/* <Result winner={this.state.winner} clickHandler={this._newGame}/>  */}
        
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

            const tempBoard = {...this.state.board}  //a true shallow copy
            if (this.state.isPlayerOneTurn) {
                tempBoard[cell] = 'X'
            } else {
                tempBoard[cell] = 'O'
            }
            
            console.log("the current board", tempBoard)
    
            //this sorts all the pieces into arrays that can possibly have a win,
            //then each array is analyzed with a function
            //6 rows, top to bottom
            const Row0 = [tempBoard.A0, tempBoard.B0, tempBoard.C0, tempBoard.D0, tempBoard.E0, tempBoard.F0, tempBoard.G0]
            const Row1 = [tempBoard.A1, tempBoard.B1, tempBoard.C1, tempBoard.D1, tempBoard.E1, tempBoard.F1, tempBoard.G1]
            const Row2 = [tempBoard.A2, tempBoard.B2, tempBoard.C2, tempBoard.D2, tempBoard.E2, tempBoard.F2, tempBoard.G2]
            const Row3 = [tempBoard.A3, tempBoard.B3, tempBoard.C3, tempBoard.D3, tempBoard.E3, tempBoard.F3, tempBoard.G3]
            const Row4 = [tempBoard.A4, tempBoard.B4, tempBoard.C4, tempBoard.D4, tempBoard.E4, tempBoard.F4, tempBoard.G4]
            const Row5 = [tempBoard.A5, tempBoard.B5, tempBoard.C5, tempBoard.D5, tempBoard.E5, tempBoard.F5, tempBoard.G5]
            //7 columns A to G
            const ColA = [tempBoard.A0, tempBoard.A1, tempBoard.A2, tempBoard.A3, tempBoard.A4, tempBoard.A5,]
            const ColB = [tempBoard.B0, tempBoard.B1, tempBoard.B2, tempBoard.B3, tempBoard.B4, tempBoard.B5,]
            const ColC = [tempBoard.C0, tempBoard.C1, tempBoard.C2, tempBoard.C3, tempBoard.C4, tempBoard.C5,]
            const ColD = [tempBoard.D0, tempBoard.D1, tempBoard.D2, tempBoard.D3, tempBoard.D4, tempBoard.D5,]
            const ColE = [tempBoard.E0, tempBoard.E1, tempBoard.E2, tempBoard.E3, tempBoard.E4, tempBoard.E5,]
            const ColF = [tempBoard.F0, tempBoard.F1, tempBoard.F2, tempBoard.F3, tempBoard.F4, tempBoard.F5,]
            const ColG = [tempBoard.G0, tempBoard.G1, tempBoard.G2, tempBoard.G3, tempBoard.G4, tempBoard.G5,]

            //BOTTOM LEFT TO TOP RIGHT DIAGANOLS THAT CAN HOLD 4 COINS
            const Diag1 = [tempBoard.A2, tempBoard.B3, tempBoard.C4, tempBoard.D5]
            const Diag2 = [tempBoard.A1, tempBoard.B2, tempBoard.C3, tempBoard.D4, tempBoard.E5]
            const Diag3 = [tempBoard.A0, tempBoard.B1, tempBoard.C2, tempBoard.D3, tempBoard.E4, tempBoard.F5]
            const Diag4 = [tempBoard.B0, tempBoard.C1, tempBoard.D2, tempBoard.E3, tempBoard.F4, tempBoard.G5]
            const Diag5 = [tempBoard.C0, tempBoard.D1, tempBoard.E2, tempBoard.F3, tempBoard.G4]
            const Diag6 = [tempBoard.D0, tempBoard.E1, tempBoard.F2, tempBoard.G3]

            //TOP LEFT TO BOTTOM RIGHT DIAGNOLS THAT CAN HOLD 4 COINS
            const Diag7 = [tempBoard.A3, tempBoard.B2, tempBoard.C1, tempBoard.D0]
            const Diag8 = [tempBoard.A4, tempBoard.B3, tempBoard.C2, tempBoard.D1,tempBoard.E0]
            const Diag9 = [tempBoard.A5, tempBoard.B4, tempBoard.C3, tempBoard.D2,tempBoard.E1,tempBoard.F0]
            const Diag10 = [tempBoard.B5, tempBoard.C4, tempBoard.D3, tempBoard.E2,tempBoard.F1,tempBoard.G0]
            const Diag11 = [tempBoard.C5, tempBoard.D4, tempBoard.E3, tempBoard.F2,tempBoard.G1]
            const Diag12 = [tempBoard.D5, tempBoard.E4, tempBoard.F3, tempBoard.G2]
    
            let winner = this.state.winner

            //if any array has a winner, then the entire if-statement is true.

            if (checArrayForWinner(Row0)|| checArrayForWinner(Row1) || checArrayForWinner(Row2) ||
            checArrayForWinner(Row3)|| checArrayForWinner(Row4) || checArrayForWinner(Row5) ||

            checArrayForWinner(ColA) || checArrayForWinner(ColB) || checArrayForWinner(ColC) || 
            checArrayForWinner(ColD) || checArrayForWinner(ColE) || checArrayForWinner(ColF) || 
            checArrayForWinner(ColG) ||

            checArrayForWinner(Diag1) || checArrayForWinner(Diag2) || checArrayForWinner(Diag3) ||
            checArrayForWinner(Diag4) || checArrayForWinner(Diag5) || checArrayForWinner(Diag6) ||

            checArrayForWinner(Diag7) || checArrayForWinner(Diag8) || checArrayForWinner(Diag9) ||
            checArrayForWinner(Diag10) || checArrayForWinner(Diag11) || checArrayForWinner(Diag12))  {
                //if true for any one array - there is a winner
                if (this.state.isPlayerOneTurn) {
                    winner = this.state.playerOneName;
                }
                else {
                    winner = this.state.playerTwoName;
                }
                
            }
            //if we are at the 42nd turn, and there are no winners, then, no-winners
            if ((this.state.turnCounter === 41) && (winner === null)) {
                winner = "NO WINNER";
            }

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
                isPlayerOneTurn: true,  //should always start with true...so figures face correct direction
                board: blankBoard,
                turnCounter: 0,
                winner: null,  
            })
        }

    

    
}



//helper function
//check connect4arrays for win:

//LOGIC explanation
//for example, if you have an array = [x,x,o,o,x,x,x,x,o]
//the length of the array is 9.  A consecutive run of 4 like values can only happen
//starting in indexes of 0,1,2,3,4, or 5.  So, we only have to go through the FOR loop from 
// 0 to < length-3, or 9-3, or < 6 (e.g, 5)
//so, for each sub array of 4 numbers (i,i+1, i+2, i+3), see if they are all equal AND 
//if they equal each other AND not null

function checArrayForWinner(array) {
    let test = false;
    for (let i=0; i < array.length - 3; i ++) {
      if ((array[i] === array[i+1]) &&
         (array[i+1] === array[i+2]) &&
         (array[i+2] === array[i+3]) &&
         (array[i] !== null)) {
            console.log("this array wins, ", array)
                test = true
               }
        }
    return test;
    }

