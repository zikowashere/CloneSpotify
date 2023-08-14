import React from "react";
import { useSearchTrackById } from "../hooks/useSearchTracksByid";
import { useSearch } from "../hooks/useSearch";
import "../assets/style/AlbumArtist.css";

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
    <button className="styleButtonAlbum" onClick={HandleAlbum}>
      <div className="styleDivOne">
        <img className="styleImageAlbumArtist" src={imageAlbum} />
        <p className="styleTitleAlbumArtist">{title}</p>
      </div>
    </button>
  );
};

export default AlbumArtist;
