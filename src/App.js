import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Dashboard from './ThroneOfGames/components/Dashboard'
import TicTacTyrion from './TicTacTyrion/components/TicTacTyrion'

function App() {
  return (
    <Router>
      <div className="App">
      <Link to='/'><h2 className='title'>Throne of Games!</h2></Link>
      
        <Switch>
          <Route exact path='/' component={ Dashboard } />
          <Route path ='/tic-tac-tyrion' component={ TicTacTyrion } />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
