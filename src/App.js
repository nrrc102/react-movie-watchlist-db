import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import './lib/font-awesome/css/all.min.css';

//components
import Header from './components/Header';
import WatchList from './components/WatchList';
import Watched from './components/Watched';
import Add from './components/Add';

function App() {
  return (
    <>
    <Header/>
    <Switch> 
      <Route exact path="/"><WatchList/></Route>
      <Route path="/watched"><Watched/></Route>
      <Route path="/add"><Add/></Route>
    </Switch>
    </>
  );
}

export default App;
