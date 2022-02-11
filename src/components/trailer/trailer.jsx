import React, { useState, useEffect } from "react";
import axios from "axios";
import "./trailer.css";

export default function Trailer(props) {
  const [trailer, setTrailer] = useState([]);
  const apiKey = "8cfb3f7b5d20b29a8bb4602b47a77292";

  useEffect(() => {
    let mounted = true;

    axios
      .get(
        `https://api.themoviedb.org/3/movie/${props.movieId}/videos?api_key=${apiKey}&language=pt-BR`
      )
      .then((result) => result.data.results)
      .then((items) => {
        if (mounted) {
          setTrailer(items[0].key);
        }
      });
    return () => (mounted = false);
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
