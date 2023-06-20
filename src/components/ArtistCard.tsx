import React from "react";
import { useSearchTrackById } from "../hooks/useSearchTracksByid";

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
      style={{ cursor: "pointer", width: "100%", backgroundColor: "black" }}
      onClick={() => TracksByArtistId()}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <img style={{ height: "150px", marginRight: "2%" }} src={imageArtist} />
        <p
          style={{
            display: "flex",
            flex: 1,
            top: "30%",
            color: "white",
            justifyContent: "center",
          }}
        >
          {title}
        </p>
      </div>
    </button>
  );
};

export default ArtistCard;
