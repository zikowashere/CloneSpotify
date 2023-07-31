import React from "react";
import { useSearchTrackById } from "../hooks/useSearchTracksByid";
import { useSearch } from "../hooks/useSearch";
import {
  styleButtonAlbum,
  styleDivOne,
  styleImageAlbumArtist,
  styleTitleAlbumArtist,
} from "../assets/style/AlbumArtist";

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
    <button style={styleButtonAlbum} onClick={() => HandleAlbum()}>
      <div style={styleDivOne}>
        <img style={styleImageAlbumArtist} src={imageAlbum} />
        <p style={styleTitleAlbumArtist}>{title}</p>
      </div>
    </button>
  );
};

export default AlbumArtist;
