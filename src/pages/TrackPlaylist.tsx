import React, { useContext, useEffect } from "react";
import { TrackContext } from "../hooks/SearchTracksByArtistContext";
import TrackCard from "../components/TrackCard";
import { track } from "../types/track";

const TrackPlaylist = () => {
  const track = useContext(TrackContext);
  const trackArray: track[] = track.track;

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
        }}
      >
        {trackArray.map((track) => (
          <TrackCard
            title={track.track.album.name}
            imageArtist={track.track.album.images[0]?.url}
            uri={track.track.uri}
            artistName={track.track.album.artists[0].name}
            track={track.track}
          />
        ))}
      </div>
    </div>
  );
};

export default TrackPlaylist;
