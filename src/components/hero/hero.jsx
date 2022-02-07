import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import styled from "@emotion/styled";

import Icon from "../../assets/icon.svg";
import "./hero.css";

export default function Hero() {
  const ColorButton = styled(Button)(({ theme }) => ({
    color: "#FFFFFF",
    borderColor: "#FFFFFF",
    "&:hover": {
      color: "#FFFFFF",
      backgroundColor: "#2d0c5e",
      borderColor: "#FFFFFF",
    },
  }));

  return (
    <div className="hero">
      <div className="containerHero">
        <Link to={`/`} className="linkHero">
          <span className="tituloSite">TMDB</span>
          <img src={Icon} alt="Icon" className="icon" />
        </Link>
        <div className="detBotao">
          <Link to={`/`} className="linkHero">
            <ColorButton variant="outlined" className="botaoHome">
              Home
            </ColorButton>
          </Link>
        </div>
      </div>
    </div>
  );
}
