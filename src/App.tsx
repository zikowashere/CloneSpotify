import "./App.css";
import { SearchProvider } from "./hooks/SearchContext";
import { BrowserRouter } from "react-router-dom";
import { TrackProvider } from "./hooks/SearchTracksByArtistContext";
import { MusicPlayProvider } from "./hooks/MusicPlayContext";
import Callback from "./pages/Callback";
import React from "react";

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
