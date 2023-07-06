import spotifyPlayer from "../assets/Images/SpotifyPlayButton.png";
import { ActionMusic } from "../actions/ActionMusic";
import { useContext } from "react";
import { contextMusic } from "../hooks/MusicPlayContext";
import { track } from "../types/track";
import React, { useMemo } from "react";

type Props = {
  imageArtist: string;
  artistName?: string;
  image?: string;
  title: string;
  uri: string;
  track: track;
};

const TrackCard = ({ title, artistName, track, image }: Props) => {
  const { playTrack } = ActionMusic();
  const { elapsedMs, setElapsedMs } = useContext(contextMusic);

  const play = () => {
    playTrack(track, 0);
  };
  return (
    <div
      style={{
        height: "80px",
        marginBottom: "40px",
        flexDirection: "row",
        width: "450px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flex: 1,
        }}
      >
        <img
          style={{ height: "80px", width: "100px", marginRight: "50px" }}
          src={image}
        />

        <p
          style={{
            marginLeft: "2%",
            color: "white",
            fontSize: "12px",
            fontWeight: "bold",
            bottom: "10px",
            width: "100%",
          }}
        >
          {title}
        </p>

        <p
          style={{
            position: "absolute",
            fontSize: "13px",
            color: "white",
            bottom: "-10px",
          }}
        >
          {artistName}
        </p>

        <div>
          <button
            style={{
              backgroundColor: "black",
              cursor: "pointer",
              border: "none",
            }}
            onClick={play}
          >
            <img
              style={{
                height: "20px",
              }}
              src={spotifyPlayer}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrackCard;
