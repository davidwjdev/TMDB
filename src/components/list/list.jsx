import React, { useState, useEffect } from "react";
import Pagination from "@mui/material/Pagination";

import axios from "axios";
import moment from "moment";

import "moment/locale/pt-br";
import "./list.css";

export default function List() {
  const [movies, setMovies] = useState([]);
  const apiKey = "8cfb3f7b5d20b29a8bb4602b47a77292";
  const [page, setPage] = useState(3);
  const maxPages = 100;


  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=pt-BR&page=${page}`
      )
      .then((results) => {
        const result = results.data.results;
        setMovies(result);
      });
  }, [page]);
 
  const handleChange = (event, value) => {
    setPage(value);
    console.log(value);
  };

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
            <span className="nomeFilme">{movie.title}</span>
            <span className="dataLancamentoFilme">
              {moment(movie.release_date).locale("pt").format("DD MMM YYYY")}
            </span>
          </div>
        ))}
        <div className="paginacao">
          <Pagination count={maxPages} page={page} onChange={handleChange} />
        </div>
      </div>
    </div>
  );
}
