import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Explore from "./components/Explore";
import Main from "./components/Main";
import AdviceForArtists from "./components/advice_for_artists";
import Gallery_page from "./components/Gallery_page";
import Page_about from "./components/Page_about";

function App() {
  const [isExplored, setIsExplored] = useState(false);

  const toggleExplored = () => {
    setIsExplored((prev) => !prev);
  };

  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route
            path="/VirtualArtGallery"
            element={
              isExplored ? <Explore /> : <Main toggle={toggleExplored} />
            }
          />
          <Route path="/advice-for-artists" element={<AdviceForArtists />} />
          <Route path="/Page_about" element={<Page_about />}></Route>
          <Route path="/gallery" element={<Gallery_page />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
