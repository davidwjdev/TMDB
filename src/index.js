import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route  } from 'react-router-dom';

import ListMovies from './pages/list-movies/list-movies';
import './index.css';
import DetMovie from './pages/det-movie/det-movie';
import Hero from "./components/hero/hero";


ReactDOM.render(
  <React.StrictMode>

    <BrowserRouter>
      <Hero />
      <Routes>
        <Route path="/" element={<ListMovies />} />
        <Route path="/detalhes/:id" element={<DetMovie />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
