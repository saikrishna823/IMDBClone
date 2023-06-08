import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Header from './components/Header';
import Home from './components/Home';
import MovieList from './components/movieList';
import Movie from './components/movieDetail'
function App() {
  return (
    <Router>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path='movie/:id' element={<Movie/>}/>
      <Route path='movies/:type' element={<MovieList/>}/>
      <Route path="/*" element={<h1>Error Page</h1>}/>
    </Routes>
    </Router>
  );
}

export default App;
