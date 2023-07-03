import React, { useContext } from "react";
import { useEffect } from "react";
import { TrackContext } from "../hooks/SearchTracksByArtistContext";
import TrackCard from "../components/TrackCard";
import { ActionMusic } from "../actions/ActionMusic";
import { track } from "../types/track";
import { contextMusic } from "../hooks/MusicPlayContext";

const Tracks = () => {
  const track = useContext(TrackContext);
  const trackArray = track.track;
  const { getCurrentState } = ActionMusic();
  const {
    musicPlay,
    stopStratTrack,
    elapsedMs,
    setStopStratTrack,
    setElapsedMs,
  } = useContext(contextMusic);

  useEffect(() => {
    setElapsedMs(0);
    console.log("====================================");
    console.log("track changed");
    console.log("====================================");
  }, [musicPlay]);

  return (
    <div
      style={{
        width: "70%",
        height: "600px",
        overflowY: "scroll",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: "1",
        }}
      >
        {trackArray.map((track: track) => (
          <TrackCard
            title={track.name}
            imageArtist={track.album.images[0]?.url}
            uri={track?.uri}
            track={track}
            image={track.album.images[0]?.url}
          />
        ))}
      </div>
    </div>
  );
};

export default Tracks;
