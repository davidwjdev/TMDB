import React, { useState, useEffect } from "react";
import axios from "axios";
import "./trailer.css";

export default function Trailer() {
  const [trailer, setTrailer] = useState([]);
  const apiKey = "8cfb3f7b5d20b29a8bb4602b47a77292";

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/634649/videos?api_key=${apiKey}&language=pt-BR`
      )
      .then((results) => {
        const result = results.data.results;
        setTrailer(result[0].key);
        console.log(result[0].key);
      });
  }, []);

  return (
    <div className="trailer">
      <div className="containerTrailer">
        <span className="tituloTrailer">Trailer</span>
        <iframe
          width="800"
          height="400"
          src={`https://www.youtube.com/embed/`+trailer}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}
