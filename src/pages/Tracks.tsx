import React, { useContext } from "react";
import { useEffect } from "react";
import { TrackContext } from "../hooks/SearchTracksByArtistContext";
import TrackCard from "../components/TrackCard";
import { track } from "../types/track";
import { contextMusic } from "../hooks/MusicPlayContext";

const Tracks = () => {
  const track = useContext(TrackContext);
  const trackArray = track.track;
  const { musicPlay, setElapsedMs } = useContext(contextMusic);
  console.log("tracks here ", trackArray);
  trackArray.map((track: track) => console.log("images", track.album));

  useEffect(() => {
    setElapsedMs(0);
  }, [musicPlay, trackArray]);

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
        {trackArray.map((track: track) =>
          track.album !== undefined ? (
            <TrackCard
              title={track.name}
              uri={track?.uri}
              track={track}
              imageArtist={track.album.images[0].url}
            />
          ) : (
            <TrackCard title={track.name} uri={track?.uri} track={track} />
          )
        )}
      </div>
    </div>
  );
};

export default Tracks;
