import React, { useEffect } from "react";
import { useSearchTrackById } from "../hooks/useSearchTracksByid";

type Props = {
  imageAlbum: string;
  title: string;
  idAlbum: string;
};
const AlbumArtist = ({ imageAlbum, title, idAlbum }: Props) => {
  useEffect(() => {
    //console.log("id album", idAlbum);
  });
  const { getTracksAlbum } = useSearchTrackById();
  return (
    <button
      style={{ cursor: "pointer", width: "100%", backgroundColor: "black" }}
      onClick={() => getTracksAlbum(idAlbum)}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <img style={{ height: "150px", marginRight: "2%" }} src={imageAlbum} />
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

export default AlbumArtist;
