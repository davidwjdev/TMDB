import React, { useState, useEffect } from "react";
import axios from "axios";
import "./elenco.css";

export default function Elenco(props) {
  const [elenco, setElenco] = useState([]);
  const apiKey = "8cfb3f7b5d20b29a8bb4602b47a77292";

  useEffect(() => {
    let mounted = true;

    axios
      .get(
        `https://api.themoviedb.org/3/movie/${props.movieId}/credits?api_key=${apiKey}&language=pt-BR`
      )
      .then((result) => result.data.cast)
      .then((items) => {
        if (mounted) {
          setElenco(items);
        }
      });
    return () => (mounted = false);
  }, []);

  return (
    <div className="elenco">
      <div className="containerElenco">
        <span className="tituloElenco">Elenco</span>
        <div className="grupoElenco">
          {elenco.map((pessoa) => (
            <div className="pessoa" key={pessoa.cast_id}>
              <img
                className="fotoElenco"
                src={`https://image.tmdb.org/t/p/w500` + pessoa.profile_path}
                alt={pessoa.name}
              />
              <span className={"nomePessoa"}>{pessoa.name}</span>
              <span className={"personagemPessoa"}>{pessoa.character}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
