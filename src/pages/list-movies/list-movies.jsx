import React, { Fragment, useLayoutEffect } from "react";
import List from "../../components/list/list";
import Top from "../../components/top/top";

import { useLocation } from "react-router-dom";


export default function ListMovies() {
  const location = useLocation();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <Fragment>
      <Top />
      <List />
    </Fragment>
  );
}
