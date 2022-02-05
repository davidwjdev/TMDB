import React, { useState, useEffect } from "react";
import axios from "axios";
import "./elenco.css";

export default function Elenco() {
  const [elenco, setElenco] = useState([]);
  const apiKey = "8cfb3f7b5d20b29a8bb4602b47a77292";

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/634649/credits?api_key=${apiKey}&language=pt-BR`
      )
      .then((results) => {
        const result = results.data.cast;
        setElenco(result);
      });
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
