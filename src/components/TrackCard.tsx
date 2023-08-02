import spotifyPlayer from "../assets/Images/SpotifyPlayButton.png";
import { ActionMusic } from "../actions/ActionMusic";
import { track, trackCard } from "../types/track";
import React from "react";

type Props = {
  imageArtist?: string;
  artistName?: string;
  title: string;
  uri: string;
  track: trackCard;
};

const TrackCard = ({ title, artistName, track, uri, imageArtist }: Props) => {
  const { playTrack } = ActionMusic();

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
        {uri && (
          <img
            style={{ height: "80px", width: "100px", marginRight: "50px" }}
            src={imageArtist}
          />
        )}

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
            id="playButton"
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
