import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./topDet.css";
import { borderLeft } from "@mui/system";

export default function TopDet() {
  const [movieId, setMovieId] = useState([]);
  const apiKey = "8cfb3f7b5d20b29a8bb4602b47a77292";
  const [genres, setGenres] = useState([]);
  const [releaseDate, setReleaseDate] = useState([]);

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
    axios
      .get(
        `https://api.themoviedb.org/3/movie/634649/release_dates?api_key=${apiKey}&language=pt-BR`
      )
      .then((results) => {
        const result = results.data;
        setReleaseDate(result);
        console.log(releaseDate);
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
            <span className="detTituloFilme">
              {movieId.title} (
              {moment(movieId.release_date).locale("pt").format("YYYY")})
            </span>
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
          <div className="avaliacaoUsuarios">
            <div style={{ width: 40, height: 40 }}>
              <CircularProgressbar
                value={(100 * 7.8) / 10}
                text={(100 * 7.8) / 10 + "%"}
                background
                strokeWidth={10}
                styles={buildStyles({
                  pathColor: "#14FF00",
                  textColor: "#14FF00",
                  trailColor: "transparent",
                  textSize: "30px",
                  backgroundColor: "rgba(255,255,255, 0.1)",
                  pathTransitionDuration: 0.5,
                })}
              />
            </div>
            <span className="tituloAvaliacaoUsuarios"> Avaliação dos Usuarios</span>
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
