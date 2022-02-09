import React, { useState, useEffect } from "react";
import axios from "axios";
import "./recomendacao.css";

import { Link } from "react-router-dom";

export default function Recomendacao(props) {
  const [recomendacao, setRecomendacao] = useState([]);
  const apiKey = "8cfb3f7b5d20b29a8bb4602b47a77292";

  // axios
  // .get(
  //   `https://api.themoviedb.org/3/movie/${props.movieId}/recommendations?api_key=${apiKey}&language=pt-BR`
  // )
  // .then((results) => {
  //   const result = results.data.results;
  //   setRecomendacao(result);
  // });

  // useEffect(() => {
  //   const CancelToken = axios.CancelToken;
  //   const source = CancelToken.source();

  //   const loadDataRecomend = () => {
  //      try {
  //     axios
  //       .get(
  //         `https://api.themoviedb.org/3/movie/${props.movieId}/recommendations?api_key=${apiKey}&language=pt-BR`
  //          , { cancelToken: source.token }
  //         )
  //       .then((result) => {
  //         setRecomendacao(result.data.results);
  //       });
  //      } catch (error) {
  //        if (axios.isCancel(error)) {
  //          console.log("cancelled");
  //        } else {
  //          throw error;
  //        }
  //      }
  //   }

  //   loadDataRecomend();
  //   return () => {
  //     source.cancel();
  //   };
  // },[]);

  useEffect(() => {
    let mounted = true;

    axios
      .get(
        `https://api.themoviedb.org/3/movie/${props.movieId}/recommendations?api_key=${apiKey}&language=pt-BR`
      )
      .then((result) => result.data.results)
      .then((items) => {
        if (mounted) {
          setRecomendacao(items);
        }
      });
    return () => (mounted = false);
  }, []);

  return (
    <div className="recomendacao">
      <div className="containerRecomendacao">
        <span className="tituloRecomendacao">Recomendações</span>
        <div className="grupoRecomendacao">
          {recomendacao.map((recomend) => (
            <div className="filme" key={recomend.id}>
              <Link
                to={`/detalhes/${recomend.id}`}
                className="linkFilme"
                onClick={() => window.location.reload(false)}
              >
                <img
                  className="fotoFilme"
                  src={`https://image.tmdb.org/t/p/w500` + recomend.poster_path}
                  alt={recomend.title}
                />
              </Link>
              {recomend.id}
              <Link
                to={`/detalhes/${recomend.id}`}
                className="linkFilme"
                onClick={() => window.location.reload(false)}
              >
                <span className={"nomeFilme"}>{recomend.title}</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
