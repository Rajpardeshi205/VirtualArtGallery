import React from "react";
import styled from "./Explore.module.css";
import Artists from "./Artists";

const Explore = () => {
  return (
    <section className={styled.section}>
      <main className={styled.main}>
        <h1>Top 25 Fine Art Photography Artists in the World</h1>
      </main>
      <div className={styled.artistsContainer}>
        <Artists />
      </div>
    </section>
  );
};

export default Explore;
