import React from 'react';
import ReactDOM from 'react-dom';
// import ListMovies from './pages/list-movies/list-movies';
import './index.css';
import DetMovie from './pages/det-movie/det-movie';
ReactDOM.render(
  <React.StrictMode>
    {/* <ListMovies /> */}
    <DetMovie />
  </React.StrictMode>,
  document.getElementById('root')
);
