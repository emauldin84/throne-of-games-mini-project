import React, { Component } from "react";
import Board from "./Board";

export class CerseiSays extends Component {
	constructor(props) {
		super(props);
		this.state = {
			board: [
				[{ cube: "1" }, { cube: "2" }],
				[{ cube: "3" }, { cube: "4" }]
			]
		};
	}

	render() {
		return (
			<div>
				<Board board={this.state.board} />
			</div>
		);
	}
}

export default CerseiSays;
