import React from "react";
import DropArea from "./DropArea";

export default function Board({
	board,
	clickHandler,
	playerOneName,
	playerTwoName,
	getDropColumnFun,
	playerOne
}) {
	// console.log("this shoudl bve ture or false for player one", playerOne)
	const player1png = "./imgs/fire-circle.gif";
	// const player1png = `./imgs/${replaceSpaceWithHyphen(playerOneName)}.png`
	const player2png = "./imgs/ice.gif";
	// const player2png = `./imgs/${replaceSpaceWithHyphen(playerTwoName)}.png`
	const blank = "./imgs/blank.png";

	const cellNames = [
		"A5",
		"B5",
		"C5",
		"D5",
		"E5",
		"F5",
		"G5",
		"A4",
		"B4",
		"C4",
		"D4",
		"E4",
		"F4",
		"G4",
		"A3",
		"B3",
		"C3",
		"D3",
		"E3",
		"F3",
		"G3",
		"A2",
		"B2",
		"C2",
		"D2",
		"E2",
		"F2",
		"G2",
		"A1",
		"B1",
		"C1",
		"D1",
		"E1",
		"F1",
		"G1",
		"A0",
		"B0",
		"C0",
		"D0",
		"E0",
		"F0",
		"G0"
	];

	return (
		<div className="masterGrid">
			<DropArea getDropColumnFun={getDropColumnFun} player={playerOne} />

			<div className="boardcontainer">
				<div className="connect4housesBoard">
					{cellNames.map((square, i) => (
						<div className="connect4housesSquare" key={i}>
							{board[square] ? (
								<img
									key={i}
									src={
										board[square] === "X"
											? player1png
											: player2png
									}
									alt="fireOrIceGif"
								/>
							) : (
								<div className="empty-box-container" />
							)}
						</div>
					))}
				</div>
				<div className="overlaydiv">
					{/* <img src="../imgs/rockwall.png" alt="rock wall overlay for connect 4" /> */}
					<img
						src="../imgs/darkwall.png"
						alt="rock wall overlay for connect 4"
					/>
				</div>
			</div>
		</div>
	);
}
