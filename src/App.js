import React from 'react';
import './App.css';
import Home from './components/home/home'
// import Asteroid from './components/Asteroid/Asteroid';
import { Switch, Route } from 'react-router-dom';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

function App() {
  return (
    <div className="App">
      <Switch>
        {/* <Route path='/id/:id'>
          <Asteroid />
        </Route> */}
        <Route path='/'>
          <Home/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
