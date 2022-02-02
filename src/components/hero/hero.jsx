import React from "react";
import Icon from "../../assets/icon.svg";
import "./hero.css";

export default function Hero() {
  return (
    <div className="hero">
      <div className="containerHero">
        <span className="tituloSite">TMDB</span>
        <img src={Icon} alt="Icon" />
      </div>
    </div>
  );
}
