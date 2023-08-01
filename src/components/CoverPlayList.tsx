import React from "react";
import {
  styleImageCover,
  styleRoot,
  styleTitle,
} from "../assets/style/CoverPlayList";

type Props = {
  imagePlaylist: string;
  title: string;
  link?: string;
};

const CoverPlayList = ({ imagePlaylist, title }: Props) => {
  return (
    <div style={styleRoot}>
      <img style={styleImageCover} src={imagePlaylist} />
      <p style={styleTitle}>{title}</p>
    </div>
  );
};

export default CoverPlayList;
