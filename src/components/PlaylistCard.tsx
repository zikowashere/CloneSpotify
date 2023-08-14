import React from "react";
import { useSearchTrackById } from "../hooks/useSearchTracksByid";
import "../assets/style/PlaylistCard.css";

type Props = {
  imagePlaylsit: string;
  title: string;
  link: string;
};

const PlaylistCard = ({ imagePlaylsit, title, link }: Props) => {
  const tracks = useSearchTrackById();

  const getTracksPlayList = async (link: string) => {
    await tracks.getTrackByPlayslist(link);
  };

  return (
    <button
      id="playlist"
      style={{ backgroundColor: "black", marginBottom: "3%" }}
      onClick={() => getTracksPlayList(link)}
    >
      <div className="styleFirstDivPlaylistCard">
        <img className="styleImagePlaylistCard" src={imagePlaylsit} />
        <p className="styleTitlePlaylistCard">{title}</p>
      </div>
    </button>
  );
};

export default PlaylistCard;
