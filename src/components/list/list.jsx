import React, { useState, useEffect } from "react";
import Pagination from "@mui/material/Pagination";

import { Link } from "react-router-dom";
import axios from "axios";
import moment from "moment";

import "moment/locale/pt-br";
import "./list.css";

export default function List() {
  const [movies, setMovies] = useState([]);
  // const [filters, setFilters] = useState([]);

  const apiKey = "8cfb3f7b5d20b29a8bb4602b47a77292";
  const [page, setPage] = useState(1);
  const maxPages = 100;

  useEffect(() => {
    let mounted = true;

    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=pt-BR&page=${page}`
      )
      .then((result) => result.data.results)
      .then((items) => {
        if(mounted){
          setMovies(items);
        }

        // let filterLS = JSON.parse(localStorage.getItem("filtersActivated"));
        // console.log(filterLS);
        // if (mounted) {
        //   setFilters(items);

        //   let resFilter = [];

        //   let moviesFilter;

        //   if (filterLS !== null || filterLS !== undefined || filterLS !== []) {
        //     Object.keys(filterLS).forEach(function (keyF) {
        //       // console.log(filterLS[keyF]);
        //       Object.keys(filters).forEach(function (keyM) {
        //         // console.log(movies[keyM]);
        //         Object.keys(filters[keyM].genre_ids).forEach(function (keyG) {
        //           filters[keyM].genre_ids.find((item) => {
        //             if (item === filterLS[keyF]) {
        //               moviesFilter = filters[keyM];
        //               resFilter.push(moviesFilter);
        //               return resFilter;
        //             }
        //           });
        //           //console.log(moviesFilter);
        //         });
        //       });
        //     });

        //     // console.log(moviesFilter);
        //     setMovies(resFilter);
        //     console.log(resFilter);
        //     console.log(movies);
        //   } else {
        //     setMovies(items);
        //     console.log(movies);
        //   }
        // }
      });

    return () => (mounted = false);
  }, [page]);

  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <div className="list">
      <div className="containerList">
        <div className="paginacao">
          <Pagination count={maxPages} page={page} onChange={handleChange} />
        </div>
        {movies.map((movie) => (
          <div className="containerFilme" key={movie.id}>
            <Link to={`/detalhes/${movie.id}`} className="linkFilme">
              <img
                className="posterFilme"
                alt="Movie"
                src={`https://image.tmdb.org/t/p/w500` + movie.poster_path}
              />
            </Link>
            <Link to={`/detalhes/${movie.id}`} className="linkFilme">
              <span className="nomeFilme">{movie.title}</span>
            </Link>

            <Link to={`/detalhes/${movie.id}`} className="linkFilme">
              <span className="dataLancamentoFilme">
                {moment(movie.release_date).locale("pt").format("DD MMM YYYY")}
              </span>
            </Link>
          </div>
        ))}
        <div className="paginacao">
          <Pagination count={maxPages} page={page} onChange={handleChange} />
        </div>
      </div>
    </div>
  );
}
