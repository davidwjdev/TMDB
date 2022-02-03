import React, { useState, useEffect } from "react";
import axios from "axios";
import "./list.css";

export default function List() {
  const [movies, setMovies] = useState([]);
  const apiKey = "8cfb3f7b5d20b29a8bb4602b47a77292";
  const page = 1;

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=pt-BR&page=${page}`
      )
      .then((results) => {
        const result = results.data.results;
        setMovies(result);
      });
  }, []);
  return (
    <div className="list">
      <div className="containerList">
        {movies.map((movie) => (
          <div className="containerFilme" key={movie.id}>
            <img
              className="posterFilme"
              alt="Movie"
              src={`https://image.tmdb.org/t/p/w500` + movie.poster_path}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
