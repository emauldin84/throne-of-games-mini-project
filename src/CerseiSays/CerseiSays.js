import React, { Component } from "react";
import Board from "./Board";

export class CerseiSays extends Component {
	constructor(props) {
		super(props);
		this.state = {
			board: [
					{ 
					cube: "1",
					image:'./imgs/top-left-stark.png',
					audio: new Audio('./audio/wind.mp3'),
					className:''
				}, { 
					cube: "2",
					image:'./imgs/top-right-lannister.png',
					audio: new Audio('./audio/crowd.mp3'),
					className:''

				},
				{ 
					cube: "3",
					image:'./imgs/bottom-left-baratheon.png',
					audio: new Audio('./audio/sword.mp3'),
					className:''

				}, { 
					cube: "4",
					image:'./imgs/bottom-right-targaryen.png',
					audio: new Audio('./audio/fire.mp3'),
					className:''
				}
			],

			userInput: [],
			randomSelection: [],
			isComputerTurn:true,
			intervalSet:false,
			isWinner:false,
			isLoser:false
		};
	}
	_newRound = ()=>{
		const randomCube = parseInt(Math.random()*4)
		const tempRandomArray = this.state.randomSelection
		const tempBoard = this.state.board
		this.setState({
			userInput: [],
		}, this._checkComputerTurn(tempRandomArray.concat({...tempBoard[randomCube]})))
	}
	componentDidUpdate(){
		console.log("component did update")
	}

	_checkComputerTurn = (randomArray)=>{
		console.log(this.state.isComputerTurn)
		if (this.state.isComputerTurn){
			// play array of sounds
			let delay = 2000

			console.log('random array',randomArray)
			randomArray.map((eaObj, i) =>{ 
				
				setTimeout(()=>{
					let previousObj = this.state.randomSelection[i - 1]
					
				
					let prevObjIndex = null
					let chosenObjIndex = null
					for(let i = 0; i < this.state.board.length; i++){
						if(this.state.board[i].cube === eaObj.cube){
							chosenObjIndex = i
						}
						if(previousObj){
							if(this.state.board[i].cube === previousObj.cube){
								prevObjIndex = i
							}
						}
					}

					eaObj.audio.play()

					let updateState = this.state.board

					if(previousObj){
						updateState[prevObjIndex].className = ''
					}
					updateState[chosenObjIndex].className = 'button-selector'
					
					
					// this.setState({
					// 	board:[
					// 		...this.state.board,
					// 		this.state.board[prevObjIndex].className = '',
					// 		this.state.board[chosenObj].className = 'button-selector'
					// 	]
					// })
					

					if(i === this.state.randomSelection.length -1){
						console.log("YES")

						setTimeout(()=>{
							updateState[chosenObjIndex].className = ''
							this.setState({
								randomSelection:randomArray,
								isComputerTurn:false,
								board:updateState})
						}, delay)
					}
					this.setState({board:updateState})
				}, delay * i)

				
				
				
			})
			// set computer turn to false
		}
	}

	// this.setstate({}, function) = .then(function)


	_checkState = (eaObj)=>{
		eaObj.audio.play()
		let userInputArray = [...this.state.userInput, {...eaObj}]
		
		const {randomSelection, userInput} = this.state
		let userLength = (userInputArray.length- 1)
		let index = this.state.randomSelection.length - 1

		console.log(userInputArray)
		

		if (randomSelection[userInputArray.length- 1].cube === userInputArray[userInputArray.length- 1].cube){

			if(userInputArray.length - 1 === index){
				if(userInputArray.length - 1 === 20){
					this.setState({isWinner:true})
				}else{
					this.setState({isComputerTurn:true},this._newRound())
					
				}

			}else{
				this.setState({userInput:userInputArray})
			}

		}else{
			// play shame
			this.setState({isLoser:true})
		}
		
	}

	_startNewGame = ()=>{
		const randomCube = parseInt(Math.random()*4)
		this.setState({
			userInput:[],
			randomSelection:[{...this.state.board[randomCube]}],
			isComputerTurn:true,
			isLoser:false,
			isWinner:false
		},this._checkComputerTurn([{...this.state.board[randomCube]}]))
		
	}

	_


	render() {
		return (
			<div>

      
      	<link
					rel="StyleSheet"
					type="text/css"
					href="../styles/cersei-says.css"
				/>
				<Board 
					board={this.state.board} 
					clickHandler={this._checkState}
				/>
				<button onClick={this._startNewGame}>NEW GAME</button>



			


			</div>
		);
	}
}

export default CerseiSays;
