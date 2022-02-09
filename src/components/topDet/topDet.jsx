import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./topDet.css";

import { Link } from "react-router-dom";
import Fab from "@mui/material/Fab";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

import Creditos from "../creditos/creditos";
import Lancamento from "../lancamento/lancamento";

export default function TopDet(props) {
  const [movieId, setMovieId] = useState([]);
  const apiKey = "8cfb3f7b5d20b29a8bb4602b47a77292";
  const [genres, setGenres] = useState([]);
  // const [releaseDate, setReleaseDate] = useState([]);
  // const [credits, setCredits] = useState([]);

  // axios
  //   .get(
  //     `https://api.themoviedb.org/3/movie/${props.movieId}?api_key=${apiKey}&language=pt-BR`
  //   )
  //   .then((results) => {
  //     const result = results.data;
  //     setMovieId(result);
  //     setGenres(result.genres.map((genre) => genre.name));
  //   });
  // axios
  //   .get(
  //     `https://api.themoviedb.org/3/movie/${props.movieId}/release_dates?api_key=${apiKey}&language=pt-BR`
  //   )
  //   .then((results) => {
  //     const result = results.data.results;
  //     const res = result.filter(function (iso) {
  //       return iso.iso_3166_1 === "BR";
  //     });
  //     setReleaseDate(res[0].release_dates[0]);
  //   });
  // axios
  //   .get(
  //     `https://api.themoviedb.org/3/movie/${props.movieId}/credits?api_key=${apiKey}&language=pt-BR`
  //   )
  //   .then((results) => {
  //     const result = results.data.crew;
  //     const pessoa = [];
  //     result.filter(function (crew) {
  //       if (crew.department === "Directing") {
  //         pessoa.push({
  //           id: crew.id,
  //           name: crew.name,
  //           department: crew.department,
  //         });
  //         return pessoa;
  //       }
  //       return pessoa;
  //     });
  //     setCredits(pessoa);
  //   });

  // useEffect(() => {
  //   const CancelToken = axios.CancelToken;
  //   const source = CancelToken.source();

  //   const loadDataMovies = () => {
  //      try {
  //     axios
  //       .get(
  //         `https://api.themoviedb.org/3/movie/${props.movieId}?api_key=${apiKey}&language=pt-BR`
  //         , { cancelToken: source.token }
  //       )
  //       .then((result) => {
  //         setMovieId(result.data);
  //         const results = result.data.genres;
  //         const data = results.map((genre) => genre.name)
  //         setGenres(data);
  //       });
  //      } catch (error) {
  //        if (axios.isCancel(error)) {
  //          console.log("cancelled");
  //        } else {
  //          throw error;
  //        }
  //      }
  //   };


    useEffect(() => {
      let mounted = true;

        axios
          .get(
            `https://api.themoviedb.org/3/movie/${props.movieId}?api_key=${apiKey}&language=pt-BR`
          )
          .then(result => result.data)
          .then(items => {
            if(mounted){
              setMovieId(items);
              const results = items.genres;
              const dataGenres = results.map((genre) => genre.name);
              setGenres(dataGenres);
            }
          })
          return () => mounted = false;
        }, []);
      

    // const loadDataReleseDates = () => {
    //   try {
    //     axios
    //       .get(
    //         `https://api.themoviedb.org/3/movie/${props.movieId}/release_dates?api_key=${apiKey}&language=pt-BR`
    //        , { cancelToken: source.token }
    //       )
    //       .then((result) => {
    //         const results = result.data.results;
    //         const res = results.filter(function (iso) {
    //           return iso.iso_3166_1 === "BR";
    //         });
    //         setReleaseDate(res[0].release_dates[0]);
    //       });
    //   } catch (error) {
    //     if (axios.isCancel(error)) {
    //       console.log("cancelled");
    //     } else {
    //       throw error;
    //     }
    //   }
    // };

      // const loadDataCredits = () => {
      //   try {
      //     axios
      //       .get(
      //         `https://api.themoviedb.org/3/movie/${props.movieId}/credits?api_key=${apiKey}&language=pt-BR`
      //         , { cancelToken: source.token }
      //       )
      //       .then((result) => {
      //         const results = result.data.crew;
      //         const pessoa = [];
      //         results.filter(function (crew) {
      //           if (crew.department === "Directing") {
      //             pessoa.push({
      //               id: crew.id,
      //               name: crew.name,
      //               department: crew.department,
      //             });
      //             return pessoa;
      //           }
      //           return pessoa;
      //         });
      //         setCredits(pessoa);
      //         console.log(pessoa);
      //       });
      //   } catch (error) {
      //     if (axios.isCancel(error)) {
      //       console.log("cancelled");
      //     } else {
      //       throw error;
      //     }
      //   }
      // }; 

    

  //   loadDataMovies();
  //   // loadDataReleseDates();
  //   // loadDataCredits();
  //   return () => {
  //     source.cancel();
  //   };
  // });

  return (
    <div className="topDet">
      <div className="botaoVoltar">
        <Link to={`/`} className="linkHero">
          <Fab color="secondary" aria-label="Voltar" title="Voltar">
            <ArrowBackIosNewIcon />
          </Fab>
        </Link>
      </div>
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
              {/* <span>{releaseDate.certification} Anos</span>
              <span className="separador"> • </span>
              <span>
                {moment(releaseDate.release_date)
                  .locale("pt")
                  .format("DD/MM/YYYY")}
                (BR)
              </span> */}
              <Lancamento movieId={props.movieId} />
              <span className="separador"> • </span>
              <span>{genres.toString()}</span>
              <span className="separador"> • </span>
              <span>
                {moment
                  .utc(
                    moment.duration(movieId.runtime, "minutes").asMilliseconds()
                  )
                  .format("HH:mm:ss")}
              </span>
            </div>
          </div>
          <div className="detAvaliacaoUsuarios">
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
          {/* <div className="detContainerPessoaDepartGrupo">
            {credits.map((pessoa) => (
              <div className="detPessoaDepartGrupo" key={pessoa.id}>
                <span className="detPessoaNome">{pessoa.name}</span>
                <span className="detPessoaDepart">{pessoa.department}</span>
              </div>
            ))}
          </div> */}
          <Creditos movieId={props.movieId} />
        </div>
      </div>
    </div>
  );
}
