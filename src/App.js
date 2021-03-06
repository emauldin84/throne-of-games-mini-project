import React from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Dashboard from "./ThroneOfGames/components/Dashboard";
import TicTacTyrion from "./TicTacTyrion/components/TicTacTyrion";
import Connect4Houses from "./Connect4Houses/components/Connect4Houses";
import CerseiSays from "./CerseiSays/CerseiSays";
import Dropdown from "./ThroneOfGames/components/Dropdown";

function App() {
	return (
		<Router>
			<div className="App">
				<div className="nav-bar">
					<Dropdown />
					<Link to="/">
							<h2 className="title7">
								Throne of Games!
							</h2>
					</Link>
				</div>

				<Switch>
					<Route exact path="/" component={Dashboard} />
					<Route
						className="tic-tac-tyrion"
						path="/tic-tac-tyrion"
						component={TicTacTyrion}
					/>
					<Route path="/cersei-says" component={CerseiSays} />
					<Route
						path="/connect-four-houses"
						component={Connect4Houses}
					/>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
