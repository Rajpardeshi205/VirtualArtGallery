import Styled from "./Main.module.css";
import slide_img_1 from "/Images/hero_img.jpg";

const Main = ({ toggle }) => {
  return (
    <main className={Styled.hero}>
      <aside className={Styled.hero_content}>
        <h1>Top 25 Fine Art Photography Artists in the World</h1>
        <p>
          we are pleased to present the most complete and reasoned selection of
          the world's most influential and famous fine art photography artists.
          Often, multidisciplinary artists or performance artists implement
          photography into their artistic practice. However, we have excluded
          these artists, only showcasing pure photographic artists—with two
          justified exceptions. So, without further ado, let's open our list
          with the first fine art photographer.
        </p>
      </aside>
      <div className={Styled.hero_image}>
        <img src={slide_img_1} alt="Hero Image" />
      </div>
      <div className={Styled.hero_btn}>
        <button onClick={toggle}>Explore</button>
      </div>
    </main>
  );
};

export default Main;
