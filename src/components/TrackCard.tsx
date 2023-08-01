import spotifyPlayer from "../assets/Images/SpotifyPlayButton.png";
import { ActionMusic } from "../actions/ActionMusic";
import { track } from "../types/track";
import React from "react";
import {
  styleFirstDivTrackCard,
  styleImageTrackCard,
  stylePlayButton,
  styleRootTrackCard,
  styleTitle,
  styleTrackCard,
} from "../assets/style/TrackCard";

type Props = {
  imageArtist?: string;
  artistName?: string;
  title: string;
  uri: string;
  track: track;
};

const TrackCard = ({ title, artistName, track }: Props) => {
  const { playTrack } = ActionMusic();

  const play = () => {
    playTrack(track, 0);
  };

  return (
    <div style={styleRootTrackCard}>
      <div style={styleFirstDivTrackCard}>
        {track.album?.images[0]?.url && (
          <img style={styleImageTrackCard} src={track.album.images[0]?.url} />
        )}

        <p style={styleTitle}>{title}</p>

        <p style={styleTrackCard}>{artistName}</p>

        <div>
          <button id="playButton" style={stylePlayButton} onClick={play}>
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
