import React, { useContext, useEffect } from "react";
import { TrackContext } from "../hooks/SearchTracksByArtistContext";
import TrackCard from "../components/TrackCard";

const TrackPlaylist = () => {
  const track = useContext(TrackContext);
  const trackArray = track;
  useEffect(() => {
    console.log("track array", track);
  });

  return (
    <div
      style={{
        width: "100%",
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
        {trackArray.track.map((track) => (
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
