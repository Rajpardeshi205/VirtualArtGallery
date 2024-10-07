import React, { useEffect } from "react";
import Aos from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import the AOS styles
import Styled from "./artists.module.css";
import art_img_25 from "/Images/photo25.png";
import art_img_24 from "/Images/photo24.png";
import art_img_23 from "/Images/photo23.png";
import art_img_22 from "/Images/photo22.png";
import art_img_21 from "/Images/photo21.png";
import art_img_20 from "/Images/photo20.png";
import art_img_19 from "/Images/photo19.png";
import art_img_18 from "/Images/photo18.png";
import art_img_17 from "/Images/photo17.png";
import art_img_16 from "/Images/photo16.png";
import art_img_15 from "/Images/photo15.png";
import art_img_14 from "/Images/photo14.png";
import art_img_13 from "/Images/photo13.png";
import art_img_12 from "/Images/photo12.png";
import art_img_11 from "/Images/photo11.png";
import art_img_10 from "/Images/photo10.png";
import art_img_9 from "/Images/photo9.png";
import art_img_8 from "/Images/photo8.png";
import art_img_7 from "/Images/photo7.png";
import art_img_6 from "/Images/photo6.png";
import art_img_5 from "/Images/photo5.png";
import art_img_4 from "/Images/photo4.png";
import art_img_3 from "/Images/photo3.png";
import art_img_2 from "/Images/photo2.jpg";
import art_img_1 from "/Images/photo1.png";

import artist_img_25 from "/Images/artist25.jpg";
import artist_img_24 from "/Images/artist24.png";
import artist_img_23 from "/Images/artist23.jpg";
import artist_img_22 from "/Images/artist22.jpg";
import artist_img_21 from "/Images/artist21.jpg";
import artist_img_20 from "/Images/artist20.jpg";
import artist_img_19 from "/Images/artist19.jpg";
import artist_img_18 from "/Images/artist18.png";
import artist_img_17 from "/Images/artist17.png";
import artist_img_16 from "/Images/artist16.jpeg";
import artist_img_15 from "/Images/artist15.jpg";
import artist_img_14 from "/Images/artist14.png";
import artist_img_13 from "/Images/artist13.jpeg";
import artist_img_12 from "/Images/artist12.png";
import artist_img_11 from "/Images/artist11.jpeg";
import artist_img_10 from "/Images/artist10.jpeg";
import artist_img_9 from "/Images/artist9.jpeg";
import artist_img_8 from "/Images/artist8.jpg";
import artist_img_7 from "/Images/artist7.jpg";
import artist_img_6 from "/Images/artist6.jpg";
import artist_img_5 from "/Images/artist5.jpeg";
import artist_img_4 from "/Images/artist4.jpg";
import artist_img_3 from "/Images/artist3.jpg";
import artist_img_2 from "/Images/artist2.jpg";
import artist_img_1 from "/Images/artist1.jpg";

const Artists = () => {
  useEffect(() => {
    Aos.init({ duration: 3000, once: false });
  }, []);

  return (
    <body className={Styled.artist_info}>
      {/* Number 25 */}
      <div className={Styled.container}>
        <div className={Styled.info} data-aos="fade-down-right">
          <h2>25. Lee Friedlander</h2>
          <p>
            Born in 1934 in Aberdeen, Washington, residing and working in New
            York, Lee Friedlander is an American photographer fascinated by the
            material aspects of the photographic process. He began photographing
            American social landscapes back in 1948, organizing the visual
            information into dynamic compositions.
          </p>
        </div>

        <div className={Styled.element} data-aos="fade-up-left">
          <img src={artist_img_25} alt="Lee Friedlander" />
        </div>
      </div>

      <div className={Styled.photography}>
        <img src={art_img_25} alt="His Photography" data-aos="flip-right" />
        <article data-aos="zoom-in-right">
          Lee Friedlander is well known for his humorous and poignant images,
          expressing the chaos of city life and dense natural landscapes, up to
          group- and self-portraits since the 1960s. Fine art photographers can
          handle and depict vast amounts of visual information into a single but
          harmonious picture. Lee Friedlander, Connecticut, 1966/printed 2015.
          Gelatin silver print – 7.6 × 5.7 cm. Courtesy Luhring Augustine.
        </article>
      </div>

      {/* Number 24 */}
      <div className={Styled.container}>
        <div className={Styled.info} data-aos="fade-down-right">
          <h2>24. Henri Cartier Bresson</h2>
          <p>
            Born in 1908 in Chanteloup and passed away in 2004 in
            Isle-sur-la-Sorgue, France, Henri Cartier-Bresson is one of the most
            influential photographers in the world from a(n) (art-)historical
            perspective. His works are marked by lively black-and-white
            pictures, combining a documentary character with a poetic touch.
          </p>
        </div>

        <div className={Styled.element} data-aos="fade-up-left">
          <img src={artist_img_24} alt="Henri Cartier Bresson" />
        </div>
      </div>

      <div className={Styled.photography}>
        <img src={art_img_24} alt="His Photography" data-aos="flip-right" />
        <article data-aos="zoom-in-right">
          Cartier-Bresson is best known for his concept, which he calls le
          moment décisif or the decisive moment. According to the French
          photographer, the key to a successful picture is to snap the shutters
          of the camera at the exact right time. His work behind the camera—and
          beyond—has defined the field of photography throughout the 20th
          century up to this very day. Henri-Cartier Bresson, Behind the Gare
          Saint-Lazare, 1932. Silver Gelatin Print – 44.5 × 29.7 cm. Courtesy
          Contessa Gallery. Luhring Augustine.
        </article>
      </div>
      {/* Number 23 */}
      <div className={Styled.container}>
        <div className={Styled.info} data-aos="fade-down-right">
          <h2>23. Robert Frank</h2>
          <p>
            Born in 1924 in Zürich, Switzerland, and passed away in 2019 in
            Inverness, Canada, Robert Frank is one of the most influential
            photographers of his generation. Arguably, Frank is best known for
            his publication titled The Americans from 1958, in which he
            documented the United States throughout the 1950s.
          </p>
        </div>

        <div className={Styled.element} data-aos="fade-up-left">
          <img src={artist_img_23} alt="Robert Frank" />
        </div>
      </div>

      <div className={Styled.photography}>
        <img src={art_img_23} alt="His Photography" data-aos="flip-right" />
        <article data-aos="zoom-in-right">
          His black-and-white pictures depict typical American symbols, like
          highways, cars, jukeboxes, and more. However, there is a specific
          alienating character in these pictures, elevating the diverse range of
          daily subjects into a homogeneous and intriguing body of artistic
          works. Robert Frank, Covered Car, Long Beach, California, 1956/1956c.
          Silver print unmounted – 15.7 × 23.8 cm.
        </article>
      </div>
      {/* Number 22 */}
      <div className={Styled.container}>
        <div className={Styled.info} data-aos="fade-down-right">
          <h2>22. Allan Sekula</h2>
          <p>
            Born in 1951 in Erie, Pennsylvania, and passed away in 2013 in Los
            Angeles, California, Allan Sekula was an American photographer,
            author, and filmmaker. Inspired by his surroundings—think of the
            port and the sea—Sekula was fascinated by human labor and activism.
          </p>
        </div>

        <div className={Styled.element} data-aos="fade-up-left">
          <img src={artist_img_22} alt="Allan Sekula" />
        </div>
      </div>

      <div className={Styled.photography}>
        <img src={art_img_22} alt="His Photography" data-aos="flip-right" />
        <article data-aos="zoom-in-right">
          Sekula aimed to live as an artist and as an activist. Doing so, with
          photography, he sought to figure out how the photographic medium
          contributed to the reigning social order, which brought the struggle
          to his family's social position, and how one could use it to undermine
          it. Allan Sekula, Cabinet Lumbroso, 1998/2000 Colour photograph 25 3/5
          × 65 7/10 in 65 × 167 cm Edition 2/5 + 1AP. Courtesy Galeria Filomena
          Soares.
        </article>
      </div>
      {/* Number 21 */}
      <div className={Styled.container}>
        <div className={Styled.info} data-aos="fade-down-right">
          <h2>21. Alfred Stieglitz</h2>
          <p>
            Born in 1864 in Hoboken, New Jersey, and passed away in 1946 in
            Manhattan, New York, Alfred Stieglitz proved at the turn of the 19th
            to the 20th century that photography was a medium that offered new
            artistic possibilities in a similar way as painting or sculpture.
          </p>
        </div>

        <div className={Styled.element} data-aos="fade-up-left">
          <img src={artist_img_21} alt="Alfred Stieglitz" />
        </div>
      </div>

      <div className={Styled.photography}>
        <img src={art_img_21} alt="His Photography" data-aos="flip-right" />
        <article data-aos="zoom-in-right">
          In 1902, Stieglitz co-initiated the so-called Photo-Secession, in
          which they emphasized photography's craftsmanship and material
          know-how. The photographic practice was presented as a labor-intensive
          craft, which greatly influenced the artist/photographer's hand. This
          notion is powerfully illustrated by Stieglitz's great care for the
          production process of his prints, often making platinum prints
          resulting in a different visual experience of the photograph. Alfred
          Stieglitz, The Swimming Lesson (1906), 1911. Photogravure – 14.6 ×
          22.9 cm. Courtesy Robert Mann Gallery.
        </article>
      </div>
      {/* Number 20 */}
      <div className={Styled.container}>
        <div className={Styled.info} data-aos="fade-down-right">
          <h2>20. Rineke Dijkstra</h2>
          <p>
            In the 20th spot, we encounter mesmerizing photographs by the Dutch
            photographer Rineke Dijkstra. Born in 1959 in Sittard, The
            Netherlands, Dijkstra is best known for her utmost contemporary
            portraits, reminiscent of 17th-century portrait paintings from the
            Low Countries.
          </p>
        </div>

        <div className={Styled.element} data-aos="fade-up-left">
          <img src={artist_img_20} alt="Rineke Dijkstra" />
        </div>
      </div>

      <div className={Styled.photography}>
        <img src={art_img_20} alt="His Photography" data-aos="flip-right" />
        <article data-aos="zoom-in-right">
          IHer large-scale photographs with bright and sharp colours, typically
          depict adolescent subjects. The setting is in many ways more minimal
          than one would think at first glance. Doing so, Dijkstra moves the
          focus of the photograph strongly to the subject, and his or her
          exchange with the photographer and the viewer. Rineke Dijkstra, Maddy,
          Martha's Vineyard, MA, USA, August 5, 2015, 2015. Inkjet print – 131.9
          × 104 cm. Edition of 6. Courtesy Marian Goodman Gallery.
        </article>
      </div>
      {/* Number 19 */}
      <div className={Styled.container}>
        <div className={Styled.info} data-aos="fade-down-right">
          <h2>19. Diane Arbus</h2>
          <p>
            Born in 1923 in Manhattan, New York, and passed away in 1971 in the
            Westbeth Artists Housing in New York, Diane Arbus is one of the most
            original and influential photographers of the 20th century. She rose
            to fame with her photographs in the 1960s, with her efforts being
            strongly rewarded in 1966 with the John Simon Guggenheim Fellowship.
          </p>
        </div>

        <div className={Styled.element} data-aos="fade-up-left">
          <img src={artist_img_19} alt="Diane Arbus" />
        </div>
      </div>

      <div className={Styled.photography}>
        <img src={art_img_19} alt="His Photography" data-aos="flip-right" />
        <article data-aos="zoom-in-right">
          The American fine art photographer depicts couples, children, NYC
          pedestrians, families, celebrities, and much more as she captures the
          post-war American social sphere through her lens. The result is an
          oeuvre depicting a diverse, compelling portrait of humanity. Diane
          Arbus, Young couple on a bench in Washington Square Park, NYC, 1965.
          Gelatin silver print; printed 1965 – 36.5 × 36.5 cm Edition of 75.
          Courtesy Howard Greenberg Gallery.
        </article>
      </div>
      {/* Number 18 */}
      <div className={Styled.container}>
        <div className={Styled.info} data-aos="fade-down-right">
          <h2>18. Walker Evans</h2>
          <p>
            BUp next, we encounter another iconic photographer with one of the
            most iconic photographic portraits ever, Walker Evans. Born in 1903
            in St. Louis, Missouri, and passed away in 1975 in New Haven,
            Connecticut, Evans is one of the most influential photographers, as
            his crystal-clear photographs inspired an entire generation, from
            the aforementioned Diane Arbus (cf. supra) up to the to be mentioned
            Bernd & Hilla Becher (cf. infra).
          </p>
        </div>

        <div className={Styled.element} data-aos="fade-up-left">
          <img src={artist_img_18} alt="Walker Evans" />
        </div>
      </div>

      <div className={Styled.photography}>
        <img src={art_img_18} alt="His Photography" data-aos="flip-right" />
        <article data-aos="zoom-in-right">
          Throughout his career, Evans recorded modern America with a poetic
          whiff to it. Marked by a documentary character, he depicted ordinary
          subjects. One of the greatest examples is his portrait of a Tenant
          Farmer's Wife from 1936, one of the most iconic photographic images
          ever. Walker Evans, Tenant Farmer's Wife, Alabama, 1936. Silver
          gelatin print – 25.4 × 20.3 cm Edition 100/1. Courtesy Jackson Fine
          Art.
        </article>
      </div>
      {/* Number 17 */}
      <div className={Styled.container}>
        <div className={Styled.info} data-aos="fade-down-right">
          <h2>17. Bernd & Hilla Becher</h2>
          <p>
            Bernd Becher, born in 1931 in Siegen, passed away in 2007, and Hilla
            Becher, born in 1934 in Berlin, and passed away in 2015, was a
            German artist duo and couple occupied with photography since 1959.
            They are internationally lauded for documenting architectural forms,
            which they called to be anonymous sculptures.
          </p>
        </div>

        <div className={Styled.element} data-aos="fade-up-left">
          <img src={artist_img_17} alt="Bernd & Hilla Becher" />
        </div>
      </div>

      <div className={Styled.photography}>
        <img src={art_img_17} alt="His Photography" data-aos="flip-right" />
        <article data-aos="zoom-in-right">
          Doing so, over thirty years, they systematically photographed in their
          very own and particular manner a wide range of often industrial,
          architectural archetypes, encompassing water towers, coal mines,
          houses of mine workers, and more. Doing so, Bernd & Hilla Becher
          present an extensive visual study of the architectural relationship
          between form and function. Bernd and Hilla Becher, Grain Elevator
          [Getreideheber], Buffalo, New York, USA, 1982. Gelatin-silver print –
          52.5 × 61 cm. Courtesy Fraenkel Gallery.
        </article>
      </div>
      {/* Number 16 */}
      <div className={Styled.container}>
        <div className={Styled.info} data-aos="fade-down-right">
          <h2>16. Catherine Opie</h2>
          <p>
            Born in 1961 in Sandusky, Ohio, currently residing and working in
            Los Angeles, California, Catherine Opie is an industry-leading
            photographer who started taking pictures on her ninth birthday as
            her parents gave her a Kodak Instamatic.
          </p>
        </div>

        <div className={Styled.element} data-aos="fade-up-left">
          <img src={artist_img_16} alt="Catherine Opie" />
        </div>
      </div>

      <div className={Styled.photography}>
        <img src={art_img_16} alt="His Photography" data-aos="flip-right" />
        <article data-aos="zoom-in-right">
          Ever since, she has been utterly fascinated with documenting specific
          communities to this day, depicting her family, friends, and other
          communities in and around Los Angeles. Still, she also has a powerful
          affinity towards landscape photography. As a result, her project-based
          practice extensively takes on various subjects, from American highways
          to lesbian couples in their homes. Catherine Opie, Untitled #3
          (Swamps), 2019. Pigment Print – 101.6 × 152.4 cm. Edition of 5 + 2AP.
          Courtesy Lehmann Maupin.
        </article>
      </div>
      {/* Number 15 */}
      <div className={Styled.container}>
        <div className={Styled.info} data-aos="fade-down-right">
          <h2>15. Carrie Mae Weems</h2>
          <p>
            Born in 1953 in Portland, Oregon, currently residing and working in
            Syracuse, New York, Carrie Mae Weems is another highly influential
            American fine art photographer. She can be seen as a visual
            rhetorician who tackles subjects in all their complexity and
            presents deeply stirring results.
          </p>
        </div>

        <div className={Styled.element} data-aos="fade-up-left">
          <img src={artist_img_15} alt="Carrie Mae Weems" />
        </div>
      </div>

      <div className={Styled.photography}>
        <img src={art_img_15} alt="His Photography" data-aos="flip-right" />
        <article data-aos="zoom-in-right">
          The American artist gives a voice to those who have been ignored,
          investigating history, power, and identity. Carrie Mae Weems is
          intrigued by how personal experiences and larger structures or
          institutions are connected, shaping our lives and society. Carrie Mae
          Weems, Untitled (Woman and phone) from the series The Kitchen Table,
          1990. Gelatin silver print – 69.2 × 69.2 cm. Edition 4/5. Courtesy
          Phillips.
        </article>
      </div>
      {/* Number 14 */}
      <div className={Styled.container}>
        <div className={Styled.info} data-aos="fade-down-right">
          <h2>14. Barbara Kruger</h2>
          <p>
            Up next, we encounter a truly iconic artist who might be more
            related to the Feminist Art movement than to fine art photography in
            the public opinion. However, Barbara Kruger, born in 1945 in Newark,
            New Jersey, rose to fame in the late 1970s and 1980s with her unique
            use of photography combined with text collage.
          </p>
        </div>

        <div className={Styled.element} data-aos="fade-up-left">
          <img src={artist_img_14} alt="Barbara Kruger" />
        </div>
      </div>

      <div className={Styled.photography}>
        <img src={art_img_14} alt="His Photography" data-aos="flip-right" />
        <article data-aos="zoom-in-right">
          Her photographs are influenced by mass media, presenting stereotypical
          images of the female self, juxtaposed with a written statement,
          challenging public opinion and gender differences with her—often large
          in scale—black-and-white prints. Barbara Kruger, Untitled (Your body
          is a battleground), 1989. Photographic silkscreen on vinyl – 284.5 ×
          284.5 cm. Courtesy The Broad.
        </article>
      </div>
      {/* Number 13 */}
      <div className={Styled.container}>
        <div className={Styled.info} data-aos="fade-down-right">
          <h2>13. Jeff Wall</h2>
          <p>
            Born in 1946 in Vancouver, Canada, where the artist resides and
            works up to this very day, Jeff Wall is a highly established artist
            and fine art photographer combining cinematography with photography,
            in which he synthesizes the essentials of the medium of photography
            with other forms of art.
          </p>
        </div>

        <div className={Styled.element} data-aos="fade-up-left">
          <img src={artist_img_13} alt="Jeff Wall" />
        </div>
      </div>

      <div className={Styled.photography}>
        <img src={art_img_13} alt="His Photography" data-aos="flip-right" />
        <article data-aos="zoom-in-right">
          In contrast to many of the aforementioned photographic artists from
          this list from this particular generation, Jeff Wall strongly
          contributed to establishing color as a critical aspect of the
          aesthetics of photography. His works are often—as Wall states
          himself—near documentary. The works seem to be documentary
          photographs. However, his pictures are staged, as he collaborates with
          the depicted subjects. Jeff Wall, Figures on a Sidewalk, 2008. Colour
          Photograph – 165 × 134 cm. Courtesy Kestnergesellschaft.
        </article>
      </div>
      {/* Number 12 */}
      <div className={Styled.container}>
        <div className={Styled.info} data-aos="fade-down-right">
          <h2>12. Nobuyoshi Araki</h2>
          <p>
            Born in 1940 in Tokyo, Japan, Nobuyoshi Araki is one of the
            undoubtedly most prolific figures of contemporary photography. His
            exuberant production of works and photo books (more than five
            hundred and counting) result from an extravagant artist working
            intensely and feverishly.
          </p>
        </div>

        <div className={Styled.element} data-aos="fade-up-left">
          <img src={artist_img_12} alt="Nobuyoshi Araki" />
        </div>
      </div>

      <div className={Styled.photography}>
        <img src={art_img_12} alt="His Photography" data-aos="flip-right" />
        <article data-aos="zoom-in-right">
          He is best known for his almost pornographic sexual subject matter,
          depicting Japanese women naked in sexual positions, often tied up,
          resulting in substantial controversy. As a result, the notorious
          Japanese fine art photographer is best known for provoking his
          audience and exploring life's most extraordinary urges, love, sex, and
          death. Nobuyoshi Araki, 67 Shooting back, 2007. C-Print on Crystal
          Paper – 60 × 50.8 cm. Edition of 10. Courtesy Galleria 13.
        </article>
      </div>
      {/* Number 11 */}
      <div className={Styled.container}>
        <div className={Styled.info} data-aos="fade-down-right">
          <h2>11. László Moholy-Nagy</h2>
          <p>
            Born in 1895 in Borsód, Austria-Hungary, and passed away in 1946 in
            Chicago, the United States of America, László Moholy-Nagy is
            arguably the most multidisciplinary artist from our list, but simply
            could not be omitted. The so-called proto-conceptual artist,
            associated with Constructivism and Bauhaus, was a radical innovator,
            experimenting with camera-less photographs, which he called
            photograms.
          </p>
        </div>

        <div className={Styled.element} data-aos="fade-up-left">
          <img src={artist_img_11} alt="László Moholy-Nagy" />
        </div>
      </div>

      <div className={Styled.photography}>
        <img src={art_img_11} alt="His Photography" data-aos="flip-right" />
        <article data-aos="zoom-in-right">
          Moholy-Nagy paved the way for abstraction to enter the realm of fine
          art photography. He opted to create photographs from unconventional
          perspectives and angles, discovering new expressive powers in contrast
          to their documentary powers. But that was not enough for the iconic
          artist, as he took things a step further by experimenting with
          photomontages in which he could layer photographs, combining
          representational elements with radically new abstraction. Laslo
          Moholy-Nagy, Photogram, 1926. Gelatin silver photogram – 23.8 × 17.8
          cm. Collection Guggenheim Museum.
        </article>
      </div>
      {/* Number 10 */}
      <div className={Styled.container}>
        <div className={Styled.info} data-aos="fade-down-right">
          <h2>10. Shirin Neshat</h2>
          <p>
            Born in 1957 in Qazvin, Iran, and currently working and residing in
            New York City, the United States of America, Shirin Neshat is an
            internationally lauded contemporary photographer examining the
            effects of Islamic fundamentalism and militancy about the personal
            and the political.
          </p>
        </div>

        <div className={Styled.element} data-aos="fade-up-left">
          <img src={artist_img_10} alt="Shirin Neshat" />
        </div>
      </div>

      <div className={Styled.photography}>
        <img src={art_img_10} alt="His Photography" data-aos="flip-right" />
        <article data-aos="zoom-in-right">
          By manner of her black-and-white photographs, most often depicting
          veiled Iranian women, Neshat tackles issues of femininity, religion,
          identity, cultural history, and exile. She overlays her pictures with
          text in ink, juxtaposing religious texts with her depicted subjects.
          Shirin Neshat, Nida, 2012. Ink on LE silver gelatin print – 152.4 ×
          114.3 cm. Edition of 5 + 2AP. Courtesy Gladstone Gallery.
        </article>
      </div>
      {/* Number 09 */}
      <div className={Styled.container}>
        <div className={Styled.info} data-aos="fade-down-right">
          <h2>9. Zanele Muholi</h2>
          <p>
            Up next, we travel to South Africa, Johannesburg to be more precise,
            where Zanele Muholi, born in 1972 in Umlazi, currently works and
            resides. Muholi is a visual activist, and her weapon of choice is
            fine art photography.
          </p>
        </div>

        <div className={Styled.element} data-aos="fade-up-left">
          <img src={artist_img_9} alt="Zanele Muholi" />
        </div>
      </div>

      <div className={Styled.photography}>
        <img src={art_img_9} alt="His Photography" data-aos="flip-right" />
        <article data-aos="zoom-in-right">
          In her works, the South African artist documents and depicts the
          LGBTQI identity of today in South Africa. She fights the
          stigmatization, discrimination, and ongoing violence against the
          LGBTQI identity. She aims to rewrite the black queer and trans-visual
          history of South Africa and beyond. Zanele Muholi, Bona II,
          Charlottesville, Virginia, 2015. Silver gelatin print – 29.2 × 50 cm.
          Edition of 8. Courtesy Yancey Richardson Gallery.
        </article>
      </div>
      {/* Number 08 */}
      <div className={Styled.container}>
        <div className={Styled.info} data-aos="fade-down-right">
          <h2>8. Robert Mapplethorpe</h2>
          <p>
            Born in 1946 in Floral Park, Queens, and passed away in 1989 in
            Boston, Robert Mapplethorpe is one of the best-known American
            photographers of the second half of the 20th century. He rose to
            fame during the 1970s, first with a Polaroid camera, followed by
            large-scale black and white photographs during the second half of
            the very same decade, which would be his most famous and strongly
            recognizable trait.
          </p>
        </div>

        <div className={Styled.element} data-aos="fade-up-left">
          <img src={artist_img_8} alt="Robert Mapplethorpe" />
        </div>
      </div>

      <div className={Styled.photography}>
        <img src={art_img_8} alt="His Photography" data-aos="flip-right" />
        <article data-aos="zoom-in-right">
          Doing so, Mapplethorpe depicted still lifes, interiors, nudes,
          self-portraits, and portraits of his friends and true icons; think of
          Patti Smith or Andy Warhol. The American artist also depicted
          sadomasochistic or homoerotic subjects, marked by a decent proportion
          of provocation but, above all, pure power and beauty. Robert
          Mapplethorpe, Frank Diaz, 1980. Gelatin silver print – 50.8 × 40.6 cm.
          Edition 15/15. Courtesy Fortes D'Aloia & Gabriel.
        </article>
      </div>
      {/* Number 07 */}
      <div className={Styled.container}>
        <div className={Styled.info} data-aos="fade-down-right">
          <h2>7. Candida Höfer</h2>
          <p>
            Up next, we have Candida Höfer. Born in 1944 in Eberswalde and
            currently working and residing in Cologne, Höfer is a German fine
            art photographer best known for her empty architectural interiors.
            Höfer creates large-scale and meticulously composed photographs
            filled with clear colors, architectural forms, and mathematical
            repetitions in her composition.
          </p>
        </div>

        <div className={Styled.element} data-aos="fade-up-left">
          <img src={artist_img_7} alt="Candida Höfer" />
        </div>
      </div>

      <div className={Styled.photography}>
        <img src={art_img_7} alt="His Photography" data-aos="flip-right" />
        <article data-aos="zoom-in-right">
          These harmonic interiors are often churches, libraries, museums,
          hotels, concert halls, or palaces, all public spaces and rooms.
          However, they are portrayed in an empty state, creating an alienating
          tension due to the absence of their human inhabitants. Doing so, Höfer
          examines the psychological impact of the design of a space or room and
          its often problematic relationship between its function and actual
          use. Candida Höfer, George Peabody Library Baltimore II, 2010. C-print
          print – 180 x 198.6 cm. Edition of 6 with 3 AP's. Courtesy Sean Kelly.
        </article>
      </div>
      {/* Number 06 */}
      <div className={Styled.container}>
        <div className={Styled.info} data-aos="fade-down-right">
          <h2>6. Andreas Gursky</h2>
          <p>
            A similar aesthetic principle can be found in the works of our
            following artist, none other than Andreas Gursky. Born in 1955 in
            Leipzig, Germany, Gursky is best known for his large-format,
            high-resolution photographs in which he invents new worlds from
            existing elements.
          </p>
        </div>

        <div className={Styled.element} data-aos="fade-up-left">
          <img src={artist_img_6} alt="Andreas Gursky" />
        </div>
      </div>

      <div className={Styled.photography}>
        <img src={art_img_6} alt="His Photography" data-aos="flip-right" />
        <article data-aos="zoom-in-right">
          The artist uses methodical observations to interrelate micro and
          macrostructures by a general organizational principle. Recurring
          subjects are cities, interiors, crowds, or commercial products, in
          which his hyper-focused scenes depict both background and foreground
          as sharp as a knife, creating an almost vertigo effect due to the vast
          amount of visual information, which can only be processed due to its
          harmonious organization in the photographic composition. Andreas
          Gurksy, 99 cent, 1999. Cibachrome print – 207 × 336.9 cm. Edition of
          6. Courtesy Gallery Red.
        </article>
      </div>
      {/* Number 05 */}
      <div className={Styled.container}>
        <div className={Styled.info} data-aos="fade-down-right">
          <h2>5. Nan Goldin</h2>
          <p>
            Up next, we have the iconic photographic oeuvre of Nan Goldin. Born
            in 1953 in Washington D.C. and currently residing and working in New
            York City, Nan Goldin is an American artist who revolutionized fine
            art photography with her deeply personal portraits, refusing any
            filter at all—visually and concerning the subject matter.
          </p>
        </div>

        <div className={Styled.element} data-aos="fade-up-left">
          <img src={artist_img_5} alt="Nan Goldin" />
        </div>
      </div>

      <div className={Styled.photography}>
        <img src={art_img_5} alt="His Photography" data-aos="flip-right" />
        <article data-aos="zoom-in-right">
          Goldin established an internationally reputed oeuvre throughout the
          1970s as she explored gender and the traditional conventions of
          normality. She photographed her direct surroundings to give them a
          voice, documenting her life and friends or different communities who
          would fall outside the conventions mentioned above and normality. Her
          photography raises awareness for marginalized groups and the war on
          drugs, a battle she witnessed firsthand with her camera. Nan Goldin,
          Cookie at Sharon's birthday party with Genaro and Lisette,
          Provincetown, 1976 Cibachrome – 50.8 × 61 cm. Edition of 25. Courtesy
          Matthew Marks Gallery.
        </article>
      </div>
      {/* Number 04 */}
      <div className={Styled.container}>
        <div className={Styled.info} data-aos="fade-down-right">
          <h2>4. Man Ray</h2>
          <p>
            As with László Moholy-Nagy mentioned above, we next encounter an
            artist with a more multidisciplinary artistic practice but can not
            be omitted from our selection of photographic artists; Man Ray. Born
            in 1890 in Philadelphia, Emmanuel Radnitzky—better known as Man
            Ray—passed away in 1976 in Paris, France.
          </p>
        </div>

        <div className={Styled.element} data-aos="fade-up-left">
          <img src={artist_img_4} alt="Man Ray" />
        </div>
      </div>

      <div className={Styled.photography}>
        <img src={art_img_4} alt="His Photography" data-aos="flip-right" />
        <article data-aos="zoom-in-right">
          The Dadaist and Surrealist enforces his spot in this list with his
          Rayographs—the eponym for his photograms produced similarly to the
          aforementioned László Moholy-Nagy. He rose to fame with these striking
          and unique black-and-white photographs, marked by technical
          experimentation, pushing the boundaries of avant-garde photography.
          Man Ray, Meret Oppenheim, 1931-1932. Vintage gelatin silver contact
          print – 11.4 × 8.3 cm. Courtesy Hyperion Press Ltd..
        </article>
      </div>
      {/* Number 03 */}
      <div className={Styled.container}>
        <div className={Styled.info} data-aos="fade-down-right">
          <h2>3. Thomas Ruff</h2>
          <p>
            We enter the top three with Thomas Ruff, born in 1958 in All am
            Harmersbach and currently working and residing in Düsseldorf,
            Germany. Ruff explores the possibilities of the medium of
            photography through experimentation. It is to say; the German fine
            art photographer does not pin him down to one specific camera,
            process, or printing technique, pushing not only the boundaries of
            his oeuvre, but of contemporary photography in general.
          </p>
        </div>

        <div className={Styled.element} data-aos="fade-up-left">
          <img src={artist_img_3} alt="Thomas Ruff" />
        </div>
      </div>

      <div className={Styled.photography}>
        <img src={art_img_3} alt="His Photography" data-aos="flip-right" />
        <article data-aos="zoom-in-right">
          Besides a wide array of analog and digital techniques, Thomas Ruff is
          also known for his very strong variety of subjects. For instance, we
          encounter abstract forms, traditional portrait photography, landscape
          photography, pornographic images, architectural photography, and more.
          Thomas Ruff, neg◊nus_33, 2014. C-print – 70.5 × 60.5 cm. Edition of 8.
          Courtesy Mai 36 Galerie.
        </article>
      </div>
      {/* Number 02 */}
      <div className={Styled.container}>
        <div className={Styled.info} data-aos="fade-down-right">
          <h2>2. Cindy Sherman</h2>
          <p>
            In the second spot, we are pleased to present you with none other
            than Cindy Sherman. Born in 1954 in Glen Ridge, New Jersey, and
            currently residing and working in New York, Cindy Sherman
            established herself as one of the undoubted most important and most
            famous photographers, a leading figure of the so-called Pictures
            Generation.
          </p>
        </div>

        <div className={Styled.element} data-aos="fade-up-left">
          <img src={artist_img_2} alt="Cindy Sherman" />
        </div>
      </div>

      <div className={Styled.photography}>
        <img src={art_img_2} alt="His Photography" data-aos="flip-right" />
        <article data-aos="zoom-in-right">
          She received international recognition in the late 1970s, building her
          photographic oeuvre upon the self-portrait and the female self. Her
          iconic pictures of the Untitled Film Series are known across the
          globe, depicting her self—implementing the self-portrait—in an
          artificial and stereotypical context as a female
          character—implementing the female self. She creates tension between
          the self and the collective psyche, which is enforced by consumer
          culture, and the modern obsession with youth and beauty. TCindy
          Sherman, Untitled Film Still #21, 1978.
        </article>
      </div>
      {/* Number 01 */}
      <div className={Styled.container}>
        <div className={Styled.info} data-aos="fade-down-right">
          <h2>1. Wolfgang Tillmans</h2>
          <p>
            We top our list with arguably the most important contemporary fine
            art photography artist in the world, Wolfgang Tillmans. Born in 1968
            in Remscheid, West Germany, and currently residing and working in
            London, Wolfgang Tillmans is best known for his mesmerizing fine art
            photographs, capturing his surroundings, observing nightclubs, his
            friends and family, still lifes, landscapes, and everything in
            between.
          </p>
        </div>

        <div className={Styled.element} data-aos="fade-up-left">
          <img src={artist_img_1} alt="Wolfgang Tillmans" />
        </div>
      </div>

      <div className={Styled.photography}>
        <img src={art_img_1} alt="His Photography" data-aos="flip-right" />
        <article data-aos="zoom-in-right">
          Tillmans was the first photographer and non-British artist to win the
          renowned Turner Prize in 2000. He rose onto the international art
          scene by documenting the emerging rave culture in sweaty nightclubs.
          However, his works are not limited to the raw depiction of reality and
          subcultures, as the German artist is in an ongoing search for the
          enigma, the beautiful, or simply a new problem to solve visually.
          Doing so, up to this very day, Wolfgang Tillmans defies categorization
          as a photographer, making his oeuvre as elusive as his intriguing
          photographs.Wolfgang Tillmans, Fragile Waves, 2016. Inkjet print on
          paper, clips – 138 × 207 cm. Courtesy Regen Projects, Los Angeles.
        </article>
      </div>
    </body>
  );
};

export default Artists;
