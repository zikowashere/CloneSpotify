import "./App.css";
import Login from "./pages/Login.jsx";
import Dashboard from "./pages/Dashboard";
import { useContext, useEffect } from "react";
import { SearchProvider } from "./hooks/SearchContext";
import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import {
  TrackContext,
  TrackProvider,
} from "./hooks/SearchTracksByArtistContext";
import Tracks from "./pages/Tracks";
import TrackPlaylist from "./pages/TrackPlaylist";
import { MusicPlayProvider, contextMusic } from "./hooks/MusicPlayContext";
import PlayerTrack from "./components/PlayerTrack";
import { ActionMusic } from "./actions/ActionMusic";

function App() {
  const accessToken = localStorage.getItem("access_token");
  const musicContext = useContext(contextMusic);

  useEffect(() => {
    musicContext.setIsPlaying(false);
    console.log("acess token is ", accessToken);
  }, [accessToken]);

  return (
    <div style={{ backgroundColor: "black" }}>
      <BrowserRouter>
        <MusicPlayProvider>
          <TrackProvider>
            <SearchProvider>
              <Routes>
                <Route
                  path="/dashboard"
                  element={
                    <SearchProvider>
                      <Dashboard />
                    </SearchProvider>
                  }
                />
                <Route path="/" element={<Login />} />
                <Route
                  path="callback"
                  element={accessToken ? <Dashboard /> : <Login />}
                />
              </Routes>
            </SearchProvider>
          </TrackProvider>
        </MusicPlayProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
