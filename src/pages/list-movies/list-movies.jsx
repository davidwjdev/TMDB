import React from "react";
import Hero from "../../components/hero/hero";
import List from "../../components/list/list";
import TopDet from "../../components/topDet/topDet";
// import Top from "../../components/top/top";

export default function ListMovies() {
    return (
        <>
        <Hero />
        {/* <Top /> */}
        <TopDet />
        <List />
        </>
    )
}
