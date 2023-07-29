import "./App.css";
import { SearchProvider } from "./hooks/SearchContext";
import { BrowserRouter } from "react-router-dom";
import { TrackProvider } from "./hooks/SearchTracksByArtistContext";
import { MusicPlayProvider, contextMusic } from "./hooks/MusicPlayContext";
import Callback from "./pages/Callback";
import React, { useMemo, useContext, useEffect } from "react";
import { ContextAppProvider, contextApp } from "./hooks/ContextApp";
import { ActionInitializer } from "./actions/ActionInitializer";

function App() {
  const { musicPlay, setElapsedMs } = useContext(contextMusic);
  const contextAll = useContext(contextApp);

  useMemo(() => {
    setElapsedMs(0);
  }, [musicPlay]);

  return (
    <div style={{ backgroundColor: "black" }}>
      <BrowserRouter>
        <MusicPlayProvider>
          <TrackProvider>
            <SearchProvider>
              <ContextAppProvider>
                <Callback />
              </ContextAppProvider>
            </SearchProvider>
          </TrackProvider>
        </MusicPlayProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
