import React, { useState, useEffect } from "react";
import axios from "axios";
import "./top.css";

import Button from "@mui/material/Button";
import styled from "@emotion/styled";

export default function Top() {
  const [genres, setGenres] = useState([]);
  const apiKey = "8cfb3f7b5d20b29a8bb4602b47a77292";

  let filtersActivated = [];

  const ColorButton = styled(Button)(({ theme }) => ({
    color: "#000000",
    backgroundColor: "#FFFFFF",
    "&:hover": {
      backgroundColor: "#45148f",
      color: "#FFFFFF",
    },
  }));

  useEffect(() => {
    let mounted = true;

    axios
      .get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=pt-BR`
      )
      .then((result) => result.data.genres)
      .then((items) => {
        if (mounted) {
          setGenres(items);
        }
      });
    return () => (mounted = false);
  }, []);

  const handleActivated = (value) => {
    let repetido = false;
    let filterLS = JSON.parse(localStorage.getItem("filtersActivated"));
    const myFunction = (item, index) => {
      if (item === value) {
        repetido = true;
        console.log("repetido?: " + repetido);
        return repetido;
      } else {
        console.log("repetido?: " + repetido);
        indexRepeticao = filtersActivated.indexOf(value);
        return indexRepeticao;
      }
    };

    let indexRepeticao = "";
    if (filtersActivated.length === 0) {
      if (filterLS === null) {
        filtersActivated.push(value);
      } else {
        for (let i = 0; i <= filterLS.length - 1; i++) {
          if (filterLS[i] !== null) {
            filtersActivated.push(filterLS[i]);
          }
        }

        filtersActivated.forEach(myFunction);
        if (!repetido) {
          filtersActivated.push(value);
        } else {
          filtersActivated.splice(indexRepeticao, 1);
        }
      }
    } else {
      filtersActivated.forEach(myFunction);
      if (!repetido) {
        filtersActivated.push(value);
      } else {
        filtersActivated.splice(indexRepeticao, 1);
      }
    }
    console.log(filtersActivated);
    localStorage.setItem("filtersActivated", JSON.stringify(filtersActivated));
  };

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
              <div className="containerBotao" key={genre.id}>
                <ColorButton
                  variant={"contained"}
                  className="filtros"
                  key={genre.id}
                  onClick={() => {
                    handleActivated(genre.id);
                  }}
                >
                  {genre.name}
                </ColorButton>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
