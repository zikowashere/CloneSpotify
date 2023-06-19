import React, { useContext } from "react";
import { useEffect } from "react";
import { TrackContext } from "../hooks/SearchTracksByArtistContext";
import TrackCard from "../components/TrackCard";
import { ActionMusic } from "../actions/ActionMusic";

const Tracks = () => {
  const track = useContext(TrackContext);
  const trackArray = track.track;
  const { getCurrentState } = ActionMusic();

  useEffect(() => {
    getCurrentState();
    console.log("tracks are", trackArray);
  }, [track]);
  return (
    <div>
      <div
        style={{
          width: "70%",
          marginLeft: "5%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: "1",
          }}
        >
          {trackArray.map((track) => (
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
    </div>
  );
};

export default Tracks;
