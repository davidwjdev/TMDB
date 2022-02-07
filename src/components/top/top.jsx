import React, { useState, useEffect } from "react";
import axios from "axios";
import "./top.css";

export default function Top() {
  const [genres, setGenres] = useState([]);
  const apiKey = "8cfb3f7b5d20b29a8bb4602b47a77292";

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=pt-BR`
      )
      .then((results) => {
        const result = results.data.genres;
        setGenres(result);
      });
  }, []);
  return (
    <div className="top">
      <div className="containerTop">
        <span className="titulo">
          Milhões de filmes, séries e pessoas para descobrir. Explore já.
        </span>
        <div className="containerFiltros">
          <span>Filtre por:</span>
          <div className="botaoFiltros">
            {genres.map((genre) => (
              <button className="filtros" key={genre.id}>
                {genre.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
