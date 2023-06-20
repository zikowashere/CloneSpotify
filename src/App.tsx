import "./App.css";
import Login from "./pages/Login.jsx";
import Dashboard from "./pages/Dashboard";
import { useContext, useEffect, useState } from "react";
import { SearchProvider } from "./hooks/SearchContext";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { TrackProvider } from "./hooks/SearchTracksByArtistContext";
import { MusicPlayProvider, contextMusic } from "./hooks/MusicPlayContext";
import Callback from "./pages/Callback";

function App() {
  return (
    <div style={{ backgroundColor: "black" }}>
      <BrowserRouter>
        <MusicPlayProvider>
          <TrackProvider>
            <SearchProvider>
              <Callback />
            </SearchProvider>
          </TrackProvider>
        </MusicPlayProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
