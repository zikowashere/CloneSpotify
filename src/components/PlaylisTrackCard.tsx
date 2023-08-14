import spotifyPlayer from "../assets/Images/SpotifyPlayButton.png";
import { ActionMusic } from "../actions/ActionMusic";
import React, { useContext, useEffect } from "react";
import { track } from "../types/track";
import { contextMusic } from "../hooks/MusicPlayContext";
import "../assets/style/PlayListTrackCard.css";

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
    <div className="styleRootPlayListTrackCard">
      <div className="styleFirstDivPlayListTrackCard">
        <img
          className="styleImagePlayListTrackCard"
          src={track.album.images[0].url}
        />

        <div className="styleSecondDiv">
          <p className="styleTitle">{title}</p>
          <p className="styleArtistName">{artistName}</p>
        </div>
        <div>
          <button
            className="styleButton"
            onClick={() => playTrack(track, elapsedMs)}
          >
            <img className="styleSpotifyPlayer" src={spotifyPlayer} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlaylisTrackCard;
