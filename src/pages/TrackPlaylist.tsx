import React, { useContext } from "react";
import { useEffect } from "react";
import { TrackContext } from "../hooks/SearchTracksByArtistContext";
import { ActionMusic } from "../actions/ActionMusic";
import TrackCard from "../components/TrackCard";

const TrackPlaylist = () => {
  const track = useContext(TrackContext);
  const trackArray = track.track;
  const { getCurrentState } = ActionMusic();

  useEffect(() => {
    getCurrentState();
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
            height: "0%",
          }}
        >
          {trackArray.map((track) => (
            <TrackCard
              title={track.track.album.name}
              imageArtist={track.track.album.images[0]?.url}
              uri={track.track.uri}
              artistName={track.track.album.artists[0].name}
              track={track.track}
              image={track.track.album.images[0].url}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrackPlaylist;
