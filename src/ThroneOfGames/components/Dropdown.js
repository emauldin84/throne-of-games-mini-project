import React from "react";

import { Link } from "react-router-dom";

export default function Dropdown() {
	return (
		<div className="dropdown">
			<p>MENU</p>
			<div className="dropdown-content">
				<Link to="/tic-tac-tyrion" className="game-links item">
					Tic-Tac-Tyrion
				</Link>
				<br />
				<Link to="/cersei-says" className="game-links item">
					Cersei Says
				</Link>
				<br />
				<Link to="/connect-four-houses" className="game-links item">
					Connect Four Houses
				</Link>
			</div>
		</div>
	);
}
