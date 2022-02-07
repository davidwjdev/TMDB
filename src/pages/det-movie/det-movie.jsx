import React, { Fragment, useLayoutEffect } from "react";
import Elenco from "../../components/elenco/elenco";
import TopDet from "../../components/topDet/topDet";
import Trailer from "../../components/trailer/trailer";
import Recomendacao from "../../components/recomendacao/recomendacao";


import { useParams, useLocation } from "react-router-dom";

export default function DetMovie() {
  const { id } = useParams();
  console.log(id);

  const location = useLocation();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <Fragment>
      <TopDet movieId={id} />
      <Elenco movieId={id} />
      <Trailer movieId={id} />
      <Recomendacao movieId={id} />
    </Fragment>
  );
}
