import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Players from "./pages/players";
import PlayerEdit from "./pages/playerEdit";


class App extends Component {
  render() {
    return (
        <Router>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/players' exact={true} element={<Players />}/>
            <Route path='/players/:id' element={<PlayerEdit />}/>
          </Routes>
        </Router>
    )
  }
}

export default App;