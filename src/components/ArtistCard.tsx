import React from "react";
import { useSearchTrackById } from "../hooks/useSearchTracksByid";
import "../assets/style/ArtistCard.css";

type Props = {
  imageArtist: string;
  title: string;
  idArtist: string;
};

const ArtistCard = ({ imageArtist, title, idArtist }: Props) => {
  const { getTrackByIdArtist } = useSearchTrackById();

  const TracksByArtistId = async () => {
    try {
      await getTrackByIdArtist(idArtist);
    } catch (error) {
      console.log("Une erreur s'est produite :", error);
    }
  };

  return (
    <button
      id="artist"
      className="styleButtonArtist"
      onClick={() => TracksByArtistId()}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <img style={{ height: "150px", marginRight: "2%" }} src={imageArtist} />
        <p className="styleTitleArtist">{title}</p>
      </div>
    </button>
  );
};

export default ArtistCard;
