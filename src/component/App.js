import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import './App.css';
import Header from './reuseComponent/Header/Header';
import Trending from './Trending';
import Search from './Search';
import Movie from './Movie';
import NavBar from'./NavBar';
const App=()=> {
  return (
    <>
    <BrowserRouter>
       <Header/>
      <div className="app">
        <Switch>
          <Route path="/" component={Trending} exact></Route>
          <Route path="/movie" component={Movie}></Route>
          <Route path="/search" component={Search}></Route>
        </Switch>
      </div>
        <NavBar/>
      </BrowserRouter>
    </>
  )
}
export default App;