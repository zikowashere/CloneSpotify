import spotifyPlayer from "../assets/Images/SpotifyPlayButton.png";
import { ActionMusic } from "../actions/ActionMusic";
import React, { useContext, useEffect } from "react";
import { track } from "../types/track";
import { contextMusic } from "../hooks/MusicPlayContext";
import {
  styleArtistName,
  styleButton,
  styleFirstDivPlayListTrackCard,
  styleImagePlayListTrackCard,
  styleRootPlayListTrackCard,
  styleSecondDiv,
  styleSpotifyPlayer,
  styleTitle,
} from "../assets/style/PlayListTrackCard";

type Props = {
  imageArtist: string;
  artistName?: string;
  title: string;
  track: track;
};

const PlaylisTrackCard = ({ title, artistName, track }: Props) => {
  const { elapsedMs } = useContext(contextMusic);
  const { playTrack } = ActionMusic();
  useEffect(() => {
    console.log("image", track.album.images[0].url);
  });
  return (
    <div style={styleRootPlayListTrackCard}>
      <div style={styleFirstDivPlayListTrackCard}>
        <img
          style={styleImagePlayListTrackCard}
          src={track.album.images[0].url}
        />

        <div style={styleSecondDiv}>
          <p style={styleTitle}>{title}</p>
          <p style={styleArtistName}>{artistName}</p>
        </div>
        <div>
          <button
            style={styleButton}
            onClick={() => playTrack(track, elapsedMs)}
          >
            <img style={styleSpotifyPlayer} src={spotifyPlayer} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlaylisTrackCard;
