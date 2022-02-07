import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./topDet.css";

export default function TopDet(props) {
  const [movieId, setMovieId] = useState([]);
  const apiKey = "8cfb3f7b5d20b29a8bb4602b47a77292";
  const [genres, setGenres] = useState([]);
  const [releaseDate, setReleaseDate] = useState([]);
  const [credits, setCredits] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${props.movieId}?api_key=${apiKey}&language=pt-BR`
      )
      .then((results) => {
        const result = results.data;
        setMovieId(result);
        setGenres(result.genres.map((genre) => genre.name));
      });
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${props.movieId}/release_dates?api_key=${apiKey}&language=pt-BR`
      )
      .then((results) => {
        const result = results.data.results;
        const res = result.filter(function (iso) {
          return iso.iso_3166_1 === "BR";
        });
        setReleaseDate(res[0].release_dates[0]);
      });
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${props.movieId}/credits?api_key=${apiKey}&language=pt-BR`
        // `https://api.themoviedb.org/3/movie/634649/credits?api_key=${apiKey}&language=pt-BR`

        )
      .then((results) => {
        const result = results.data.crew;
        const pessoa = [];
        result.filter(function (crew) {
          if(crew.department === "Directing"){
            pessoa.push({
              id: crew.id,
              name:crew.name,
              department: crew.department,
            });
            return pessoa;
          }
            return pessoa;
        });   
        setCredits(pessoa);
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
            <div className="detIdadeDataLancGenDur">
              <span>{releaseDate.certification} Anos</span>
              <span> • </span>
              <span>
                {moment(releaseDate.release_date)
                  .locale("pt")
                  .format("DD/MM/YYYY")}
                (BR)
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
                value={(100 * movieId.vote_average) / 10}
                text={(100 * movieId.vote_average) / 10 + "%"}
                background
                strokeWidth={10}
                styles={buildStyles({
                  pathColor: "#14FF00",
                  textColor: "#14FF00",
                  trailColor: "transparent",
                  textSize: "28px",
                  backgroundColor: "rgba(255,255,255, 0.1)",
                  pathTransitionDuration: 0.5,
                })}
              />
            </div>
            <span className="detTituloAvaliacaoUsuarios">
              Avaliação dos Usuarios
            </span>
          </div>
          <div className="detSinopse">
            <span className="detTituloSinopse">Sinopse</span>
            <span className="detTextoSinopse">{movieId.overview}</span>
          </div>
          <div className="detContainerPessoaDepartGrupo">
            {
              credits.map((pessoa) => (
              <div className="detPessoaDepartGrupo" key={pessoa.id} >
                <span className="detPessoaNome">{pessoa.name}</span>
                <span className="detPessoaDepart">{pessoa.department}</span>
              </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}
