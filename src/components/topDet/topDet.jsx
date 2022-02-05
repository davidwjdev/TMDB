import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";

import "./topDet.css";

export default function TopDet() {
  const [movieId, setMovieId] = useState([]);
  const apiKey = "8cfb3f7b5d20b29a8bb4602b47a77292";
  const [genres, setGenres] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/634649?api_key=${apiKey}&language=pt-BR`
      )
      .then((results) => {
        const result = results.data;
        setMovieId(result);
        setGenres(result.genres.map((genre) => genre.name));
      });
  }, []);
  return (
    <div className="topDet">
      <div className="containerTopDet">
        <div className="detFilmeFoto">
          <img
            className="posterFilmeDet"
            alt="Movie"
            src={`https://image.tmdb.org/t/p/w500` + movieId.poster_path}
          />
        </div>
        <div className="detFilmeTexto">
          <div>
            <span>{movieId.title}</span>
            <div>
              <span></span>
              <span> • </span>
              <span>
                {moment(movieId.release_date)
                  .locale("pt")
                  .format("DD MMM YYYY")}
              </span>
              <span> • </span>
              <span>{genres.toString()}</span>
              <span> • </span>
              <span>
                {moment
                  .utc(
                    moment.duration(movieId.runtime, "minutes").asMilliseconds()
                  )
                  .format("HH:mm:ss")}
              </span>
            </div>
          </div>
          <div>
            <span>{movieId.vote_average}</span>
            <span> Avaliação dos Usuarios</span>
          </div>
          <div>
            <span>Sinopse</span>
            <span>{movieId.overview}</span>
          </div>
          <div>
            <span>Sinopse</span>
            <span>{movieId.overview}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
