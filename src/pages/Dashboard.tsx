import { useContext, useEffect, useMemo } from "react";
import { useSearch } from "../hooks/useSearch";
import ChoiceSearchBar from "../components/ChoiceSearchBar";
import { contextMusic } from "../hooks/MusicPlayContext";
import PlayerTrack from "../components/PlayerTrack";
import { ActionMusic } from "../actions/ActionMusic";
import { TrackContext } from "../hooks/SearchTracksByArtistContext";
import Header from "../components/Header";
import Home from "./Home";
import Tracks from "./Tracks";
import SideBar from "../components/SideBar";
import Playlists from "../components/Playlists";
import TrackPlaylist from "./TrackPlaylist";
import Episodes from "../components/Episodes";
import React from "react";
import { contextApp } from "../hooks/ContextApp";

const Dashboard = () => {
  const searchPlaylist = useSearch();
  const showScreenContext = useContext(contextApp);

  const { musicPlay, isPlaying, setElapsedMs, elapsedMs } =
    useContext(contextMusic);
  const { track, showPlayslist } = useContext(TrackContext);

  useMemo(() => {
    setElapsedMs(0);
    searchPlaylist.getPlayListUser();
    searchPlaylist.getEpisodesUser();
  }, [musicPlay]);

  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <ChoiceSearchBar />
      </div>

      <div style={{ display: "flex", flexDirection: "row" }}>
        <div
          style={{
            left: 0,
            width: "15%",
            backgroundColor: "#1E1D1D",
            borderRadius: "10px",
          }}
        >
          <p
            style={{
              color: "white",
              fontSize: "20px",
              fontWeight: "bold",
              marginLeft: "10%",
            }}
          >
            {" "}
            Playlists{" "}
          </p>
          <div style={{ height: "70%", overflowY: "scroll" }}>
            <SideBar
              children={
                <>
                  <Playlists />
                  <Episodes />
                </>
              }
            />
          </div>
        </div>

        <div
          style={{
            display: "flex",
            marginLeft: "5%",
            width: "100%",
            justifyContent: "center",
          }}
        >
          {track.length > 0 ? (
            <>{showPlayslist ? <TrackPlaylist /> : <Tracks />}</>
          ) : (
            <Home />
          )}
        </div>
      </div>

      <div
        style={{
          position: "fixed",
          backgroundColor: "black",
          bottom: 0,
          height: "7%",
          width: "100%",
        }}
      >
        {isPlaying && (
          <PlayerTrack
            track={musicPlay}
            durationTrack={musicPlay!.duration_ms}
          />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
