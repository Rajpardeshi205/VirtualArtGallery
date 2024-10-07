import React from "react";
import Styled from "./Page_about.module.css";

const about = () => {
  return (
    <div className={Styled.page_about}>
      <section className={Styled.about1}>
        <p>
          Here's the updated text with Contemporary Art Issue (CAI) changed to
          Virtual Art Gallery (VAG): Virtual Art Gallery (VAG) is a hybrid
          platform for contemporary art in the form of an online magazine,
          career advice services for artists, and a gallery program. With the
          online magazine, including a YouTube channel, VAG aims to contribute
          to the written (online) canonization of recent art history, staying at
          the forefront of contemporary art. It is also the mission of VAG to
          empower artists by providing adequate and industry-approved advice for
          artists for long-term success in the highest realms of the art world.
        </p>
        <p>
          VAG responds to the high demand for accessible, online information and
          advice for artists, addressing the gap in practical information for
          artists when it comes to trustworthy and authoritative sources on the
          web and social media. The kaleidoscopic approach bundles proven
          strategies, real-life experiences, and industry-accepted information
          from the perspective of the artist, gallery, collector, or
          curator—working closely with various actors active in the field.
        </p>
        <p>
          The VAG Gallery program consists of on- and offline curatorial
          activities. Due to the interdisciplinary character of the Virtual Art
          Gallery, VAG Gallery is able to implement a kaleidoscopic approach to
          rethinking the curatorial practice of a gallery for contemporary art,
          distinguishing itself from other galleries. The acquired research
          results, knowledge, and art scientific data of the VAG platform are
          translated into a carefully curated exhibition program and selection
          of artists.
        </p>
        <p>
          Besides being an exhibition space, VAG Gallery functions as the office
          of VAG and a project space for research, experiment, book launches,
          lectures, and other events.
        </p>
      </section>

      <footer className={Styled.footer}>
        <div className={Styled.contactInfo}>
          <h4>Contact :</h4>
          <p>
            <a href="mailto:info@virtualartgallery.com">
              info@virtualartgallery.com
            </a>
          </p>
          <h4>Office :</h4>
          <address>
            Shivaji Nagar, Parli Vaijnath, Pin: 431515, Maharashtra
          </address>
        </div>

        <div className={Styled.about}>
          <h2>About Us</h2>
          <p>
            Virtual Art Gallery (VAG) is dedicated to providing a platform for
            contemporary artists, showcasing their work, and offering valuable
            career advice. Our mission is to support and empower artists
            globally.
          </p>
        </div>

        <div className={Styled.socialMedia}>
          <h2>Follow Us</h2>
          <a
            href="https://facebook.com/virtualartgallery"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          <a
            href="https://twitter.com/virtualartgallery"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://instagram.com/virtualartgallery"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://linkedin.com/company/virtualartgallery"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>

        <div className={Styled.footerBottom}>
          <p>&copy; 2024 Virtual Art Gallery. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default about;
