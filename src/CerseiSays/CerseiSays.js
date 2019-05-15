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
					className:'',
				}, { 
					cube: "2",
					image:'./imgs/top-right-lannister.png',
					audio: new Audio('./audio/crowd.mp3'),
					className:'',

				},
				{ 
					cube: "3",
					image:'./imgs/bottom-left-baratheon.png',
					audio: new Audio('./audio/sword.mp3'),
					className:'',

				}, { 
					cube: "4",
					image:'./imgs/bottom-right-targaryen.png',
					audio: new Audio('./audio/dragon.mp3'),
					className:'',
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
			randomSelection:tempRandomArray.concat({...tempBoard[randomCube]}),
			isComputerTurn:true

		}, ()=>{
			this._checkComputerTurn()
		}
		)
	}

	_checkComputerTurn = ()=>{


		if (this.state.isComputerTurn){
			// play array of sounds
			this._playComputerSound(this.state.randomSelection, 0)

			// console.log('random array',this.state.randomSelection)
			// this.state.randomSelection.map((eaObj, i) =>{ 
				
			// 	setTimeout(()=>{
			// 		let previousObj = this.state.randomSelection[i - 1]
					
				
			// 		let prevObjIndex = null
			// 		let chosenObjIndex = null
			// 		for(let i = 0; i < this.state.board.length; i++){
			// 			if(this.state.board[i].cube === eaObj.cube){
			// 				chosenObjIndex = i
			// 			}
			// 			// if(previousObj){
			// 			// 	if(this.state.board[i].cube === previousObj.cube){
			// 			// 		prevObjIndex = i
			// 			// 	}
			// 			// }
			// 		}
			// 		eaObj.audio.play()

			// 		let updateState = this.state.board

			// 		if(previousObj){
			// 			updateState[prevObjIndex].className = ''
			// 		}
			// 		updateState[chosenObjIndex].className = 'button-selector'
					
					
					

			// 		if(i === this.state.randomSelection.length -1){

			// 			setTimeout(()=>{
			// 				updateState[chosenObjIndex].className = ''
			// 				this.setState({
			// 					isComputerTurn:false,
			// 					board:updateState})
			// 			}, delay)
			// 		}
			// 		this.setState({board:updateState})
			// 	}, (delay * (i + 1)))

				
				
				
			// })
			// set computer turn to false
		}
	}
	_playComputerSound = (array, index)=>{
		let chosenObjIndex = null
		for(let i = 0; i < this.state.board.length; i++){
			if(this.state.board[i].cube === array[index].cube){
				chosenObjIndex = i
			}
		}
		let updateState = this.state.board
		updateState[chosenObjIndex].className = 'button-selector'
		this.setState({board:updateState})

		let eaAudio = ''
		switch(array[index].cube){
			case "1":
				eaAudio = new Audio('./audio/wind.mp3');
			break;
			case "2":
				eaAudio = new Audio('./audio/crowd.mp3');
			break;
			case "3":
				eaAudio = new Audio('./audio/sword.mp3');
			break;
			case "4":
				eaAudio = new Audio('./audio/dragon.mp3');
			break;
			default:
				return null
		}
			eaAudio.addEventListener('ended', ()=>{
				updateState[chosenObjIndex].className = ''
				this.setState({board:updateState})
				if (index < array.length -1){
					this._playComputerSound(array, (index+1))

					
				}
				if (index === array.length -1){
					this.setState({isComputerTurn:false})
				}
			})
			eaAudio.play()
	}



	// this.setstate({}, function) = .then(function)


	_checkState = (eaObj)=>{
		const {isLoser, isWinner, isComputerTurn} = this.state
		if(!isLoser && !isWinner && !isComputerTurn ){

			eaObj.audio.play()
			let userInputArray = [...this.state.userInput, {...eaObj}]
			
			const {randomSelection, userInput} = this.state
			let userLength = (userInputArray.length- 1)
			let index = this.state.randomSelection.length - 1
	
			
	
			if (randomSelection[userInputArray.length- 1].cube === userInputArray[userInputArray.length- 1].cube){
	
				if(userInputArray.length - 1 === index){
					if(userInputArray.length - 1 === 20){
						this.setState({isWinner:true})
					}else{
						setTimeout(()=>{
							this.setState({isComputerTurn:true},this._newRound)

						},1500)
						
					}
	
				}else{
					this.setState({userInput:userInputArray})
				}
	
			}else{
				// play shame
				this.setState({isLoser:true})
			}
			

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
		},()=>{

			this._checkComputerTurn()
		
		}
			
			)
		
	}

	_


	render() {
		return (
			<div>
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
