import React, { useState, useEffect } from "react";
import axios from "axios";
import "./recomendacao.css";

export default function Recomendacao(props) {
  const [recomendacao, setRecomendacao] = useState([]);
  const apiKey = "8cfb3f7b5d20b29a8bb4602b47a77292";

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${props.movieId}/recommendations?api_key=${apiKey}&language=pt-BR`
      )
      .then((results) => {
        const result = results.data.results;
        setRecomendacao(result);
      });
  }, []);

  return (
    <div className="recomendacao">
      <div className="containerRecomendacao">
        <span className="tituloRecomendacao">Recomendações</span>
        <div className="grupoRecomendacao">
          {recomendacao.map((recomend) => (
            <div className="filme" key={recomend.id}>
              <img
                className="fotoFilme"
                src={`https://image.tmdb.org/t/p/w500` + recomend.poster_path}
                alt={recomend.title}
              />
              <span className={"nomeFilme"}>{recomend.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
