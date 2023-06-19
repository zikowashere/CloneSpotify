import { useContext, useEffect } from "react";
import Header from "../components/Header";
import { useSearch } from "../hooks/useSearch";
import ChoiceSearchBar from "../components/ChoiceSearchBar";
import { contextMusic } from "../hooks/MusicPlayContext";
import PlayerTrack from "../components/PlayerTrack";
import { ActionMusic } from "../actions/ActionMusic";
import { TrackContext } from "../hooks/SearchTracksByArtistContext";
import Home from "./Home";
import Tracks from "./Tracks";
import SideBar from "../components/SideBar";
import Playlists from "../components/Playlists";
import TrackPlaylist from "./TrackPlaylist";
import Episodes from "../components/Episodes";

const Dashboard = () => {
  const searchPlaylist = useSearch();
  const {
    musicPlay,
    stopStratTrack,
    elapsedMs,
    setStopStratTrack,
    isPlaying,
    setElapsedMs,
  } = useContext(contextMusic);
  const { track, showPlayslist } = useContext(TrackContext);
  const { playTrack, pauseTrack } = ActionMusic();

  const playTrackArtistOrPlaylist = () => {
    playTrack(musicPlay, elapsedMs);
  };

  const playMusicOrStop = () => {
    setStopStratTrack(!stopStratTrack);
    stopStratTrack ? pauseTrack() : playTrackArtistOrPlaylist();
  };

  useEffect(() => {
    setElapsedMs(0);
    searchPlaylist.getPlayListUser();
    searchPlaylist.getEpisodesUser();
  }, [musicPlay]);

  return (
    <div>
      <div>
        <div>
          <Header />
        </div>
        <div>
          <ChoiceSearchBar />
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div>
          <div
            style={{
              position: "fixed",
              left: 0,
              height: "90vh",
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
            marginLeft: "30%",
            width: "100%",
            justifyContent: "center",
          }}
        >
          {track.length > 0 ? (
            <div
              style={{
                height: "calc(100vh - 10%)",
                overflowY: "auto",
              }}
            >
              {showPlayslist ? <TrackPlaylist /> : <Tracks />}{" "}
            </div>
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
          height: "10%",
          width: "100%",
        }}
      >
        {isPlaying && (
          <PlayerTrack
            track={musicPlay}
            playOrStopTrack={playMusicOrStop}
            durationTrack={musicPlay.duration_ms}
          />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
