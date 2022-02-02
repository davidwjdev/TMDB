import React from "react";
import "./top.css";

export default function Top() {
  return (
    <div className="top">
      <div className="containerTop">
        <span className="titulo">
          Milhões de filmes, séries e pessoas para descobrir. Explore já.
        </span>
        <div className="containerFiltros">
            <span>Filtre por:</span>
            <div className="botaoFiltros">
                <button className="filtros">
                    Teste
                </button>
            </div>
        </div>
      </div>
    </div>
  );
}
