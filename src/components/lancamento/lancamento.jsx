import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import "./lancamento.css";

export default function Lancamento(props) {
  const apiKey = "8cfb3f7b5d20b29a8bb4602b47a77292";
  const [releaseDate, setReleaseDate] = useState([]);

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

  // useEffect(() => {
  //   const CancelToken = axios.CancelToken;
  //   const source = CancelToken.source();

  //   const loadDataReleseDates = () => {
  //      try {
  //     axios
  //       .get(
  //         `https://api.themoviedb.org/3/movie/${props.movieId}/release_dates?api_key=${apiKey}&language=pt-BR`
  //       , { cancelToken: source.token }
  //       )
  //       .then((result) => {
  //         const results = result.data.results;
  //         const res = results.filter(function (iso) {
  //           return iso.iso_3166_1 === "BR";
  //         });
  //         setReleaseDate(res[0].release_dates[0]);
  //       });

  //      } catch (error) {
  //        if (axios.isCancel(error)) {
  //          console.log("cancelled");
  //        } else {
  //          throw error;
  //        }
  //      }
  //   };

  //   loadDataReleseDates();
  //   return () => {
  //     source.cancel();
  //   };
  // });

  useEffect(() => {
    let mounted = true;

    axios
      .get(
        `https://api.themoviedb.org/3/movie/${props.movieId}/release_dates?api_key=${apiKey}&language=pt-BR`
      )
      .then((result) => result.data.results)
      .then((items) => {
        if (mounted) {
          const res = items.filter(function (iso) {
            return iso.iso_3166_1 === "BR";
          });
          setReleaseDate(res[0].release_dates[0]);
        }
      });
    return () => (mounted = false);
  }, []);

  return (
    <>
      <span>{releaseDate.certification} Anos</span>
      <span className="separador"> • </span>
      <span>
        {moment(releaseDate.release_date).locale("pt").format("DD/MM/YYYY")}
        (BR)
      </span>
    </>
  );
}
