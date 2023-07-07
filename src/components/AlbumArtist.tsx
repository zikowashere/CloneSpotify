import React from "react";
import { useSearchTrackById } from "../hooks/useSearchTracksByid";
import { useSearch } from "../hooks/useSearch";

type Props = {
  imageAlbum: string;
  title: string;
  idAlbum: string;
};
const AlbumArtist = ({ imageAlbum, title, idAlbum }: Props) => {
  const { getTracksAlbum } = useSearchTrackById();
  const { getAlbumById } = useSearch();
  const HandleAlbum = () => {
    getTracksAlbum(idAlbum);
    getAlbumById(idAlbum);
  };
  return (
    <button
      style={{ cursor: "pointer", width: "100%", backgroundColor: "black" }}
      onClick={() => HandleAlbum()}
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
