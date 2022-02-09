import React, { useState, useEffect } from "react";
import axios from "axios";
import "./trailer.css";

export default function Trailer(props) {
  const [trailer, setTrailer] = useState([]);
  const apiKey = "8cfb3f7b5d20b29a8bb4602b47a77292";

  // axios
  //   .get(
  //     `https://api.themoviedb.org/3/movie/${props.movieId}/videos?api_key=${apiKey}&language=pt-BR`
  //   )
  //   .then((results) => {
  //     const result = results.data.results;
  //     setTrailer(result[0].key);
  //   });

  // useEffect(() => {
  //   const CancelToken = axios.CancelToken;
  //   const source = CancelToken.source();

  //   const loadDataVideos = () => {
  //      try {
  //      axios
  //       .get(
  //         `https://api.themoviedb.org/3/movie/${props.movieId}/videos?api_key=${apiKey}&language=pt-BR`
  //        ,  { cancelToken: source.token }
  //       )
  //       .then((result) => {
  //         setTrailer(result.data.results);
  //       });
  //      } catch (error) {
  //        if (axios.isCancel(error)) {
  //          console.log("cancelled");
  //        } else {
  //          throw error;
  //        }
  //      }
  //   };

  //   loadDataVideos();
  //   return () => {
  //     //console.log("cleaning");
  //     source.cancel();
  //   };
  // }, []);


  useEffect(() => {
    let mounted = true;

       axios
        .get(
          `https://api.themoviedb.org/3/movie/${props.movieId}/videos?api_key=${apiKey}&language=pt-BR`
        )
        .then(result => result.data.results)
        .then( items =>{
          if(mounted){
            setTrailer(items)
          }
        })
        return () => mounted = false;
  }, []);





  return (
    <div className="trailer">
      <div className="containerTrailer">
        <span className="tituloTrailer">Trailer</span>
        <iframe
          src={`https://www.youtube.com/embed/` + trailer}
          title="YouTube video player"
        ></iframe>
      </div>
    </div>
  );
}
