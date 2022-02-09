import React, { useState, useEffect } from "react";
import axios from "axios";
import "./creditos.css";

export default function Creditos(props) {
  const apiKey = "8cfb3f7b5d20b29a8bb4602b47a77292";
  const [credits, setCredits] = useState([]);

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

  //     const loadDataCredits = () => {
  //        try {
  //         axios
  //           .get(
  //             `https://api.themoviedb.org/3/movie/${props.movieId}/credits?api_key=${apiKey}&language=pt-BR`
  //             , { cancelToken: source.token }
  //           )
  //           .then((result) => {
  //             const results = result.data.crew;
  //             const pessoa = [];
  //             results.filter(function (crew) {
  //               if (crew.department === "Directing") {
  //                 pessoa.push({
  //                   id: crew.id,
  //                   name: crew.name,
  //                   department: crew.department,
  //                 });
  //                 return pessoa;
  //               }
  //               return pessoa;
  //             });
  //             setCredits(pessoa);
  //             console.log(pessoa);
  //           });
  //       } catch (error) {
  //         if (axios.isCancel(error)) {
  //           console.log("cancelled");
  //         } else {
  //           throw error;
  //         }
  //       }
  //     };

  //   loadDataCredits();
  //   return () => {
  //     source.cancel();
  //   };
  // },[]);

  useEffect(() => {
    let mounted = true;

    axios
      .get(
        `https://api.themoviedb.org/3/movie/${props.movieId}/credits?api_key=${apiKey}&language=pt-BR`
      )
      .then((result) => result.data.crew)
      .then((items) => {
        if (mounted) {
          const pessoa = [];
          items.filter(function (crew) {
            if (crew.department === "Directing") {
              pessoa.push({
                id: crew.id,
                name: crew.name,
                department: crew.department,
              });
              return pessoa;
            }
            return pessoa;
          });
          setCredits(pessoa);
        }
      });
    return () => (mounted = false);
  }, []);

  return (
    <div className="detContainerPessoaDepartGrupo">
      {credits.map((pessoa) => (
        <div className="detPessoaDepartGrupo" key={pessoa.id}>
          <span className="detPessoaNome">{pessoa.name}</span>
          <span className="detPessoaDepart">{pessoa.department}</span>
        </div>
      ))}
    </div>
  );
}
