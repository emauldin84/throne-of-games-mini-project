import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './ThroneOfGames/components/Dashboard';
import TicTacTyrion from './TicTacTyrion/components/TicTacTyrion';
import Connect4Houses from './Connect4Houses/components/Connect4Houses';

function App() {
  return (
    <Router>
      <div className="App">
      <h2>Throne of Games!</h2>
      
        <Switch>
          <Route exact path='/' component={ Dashboard } />
          <Route path ='/tic-tac-tyrion' component={ TicTacTyrion } />
          <Route path ='/connect-four-houses' component={Connect4Houses} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
