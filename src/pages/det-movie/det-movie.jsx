import React, { Fragment } from "react";
import Hero from "../../components/hero/hero";
import Elenco from "../../components/elenco/elenco";
import TopDet from "../../components/topDet/topDet";
import Trailer from "../../components/trailer/trailer";
import Recomendacao from "../../components/recomendacao/recomendacao";

export default function DetMovie() {
  return (
    <Fragment>
      <Hero />
      <TopDet />
      <Elenco />
      <Trailer />
      <Recomendacao />
    </Fragment>
  );
}
