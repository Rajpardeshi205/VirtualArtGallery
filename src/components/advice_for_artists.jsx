import React from "react";
import Styled from "./advice_for_artists.module.css";
import slide_img_1 from "/Images/ad1.jpg";

const AdviceForArtists = () => {
  return (
    <div className={Styled.advice}>
      <div className={Styled.p_img}>
        <aside>
          <img src={slide_img_1} alt="Professional" />
          <p>
            Video interview during "Julien Delagrange: Rites Oubliés" (2024) at
            Galerie Sabine Bayasli in Paris, France.
          </p>
        </aside>
      </div>
      <section>
        <p>
          VAG Advice for Artists is hosted by Julien Delagrange, a Belgian
          contemporary artist, art historian, and the founder and director of
          the VAG platform. Delagrange studied Science of Arts at the Ghent
          University, graduating with a master's degree magna cum laude. He has
          worked for various art world institutions, including the Centre for
          Fine Arts (BOZAR) in Brussels, the Jan Vercruysse Foundation (artist
          estate) in Brussels, and the Ghent University Library as a senior in
          the Special Collections. As a freelancer, he contributed to various
          exhibition catalogs, magazines, galleries, and educational programs as
          an art critic and guest lecturer. Before his 30th birthday, Delagrange
          was represented by several art galleries, hosting solo exhibitions at
          renowned galleries worldwide.
        </p>
        <p>
          In 2021, Delagrange founded Virtual Art Gallery (VAG), the artistic
          denominator for art world ventures beyond personal artistic practice.
          The platform consists of an online magazine, contributing to the
          online canonization of contemporary art, rethinking the art platform,
          and surpassing the online reach of many established art platforms in
          just a few years. The same year, VAG Gallery was opened—a contemporary
          art gallery representing and exhibiting emerging and mid-career
          artists.
        </p>
        <p>
          Most recently, thanks to the VAG YouTube channel, VAG has made it its
          mission to empower artists by providing adequate and industry-approved
          advice for artists. VAG's audience highlighted the significant lack
          of—and immense need for—accessible online information and career
          advice that truly works in the art world. Due to in-field working
          experience and VAG's network—consisting of numerous successful artists
          and galleries, as well as operating as an art gallery—Delagrange
          learned the unwritten rules of the art world. These are rules,
          strategies, and information crucial for success but nowhere being
          taught. Moreover, many false sources online offer misleading advice,
          potentially harming an artist's career. Therefore, it has become a
          personal avocation and moral duty for Delagrange to provide
          trustworthy, adequate, and proven career advice, sharing everything
          artists need to know to succeed, but nobody is telling them.
        </p>
      </section>
    </div>
  );
};

export default AdviceForArtists;
