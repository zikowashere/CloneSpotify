import React from "react";
import "../assets/style/CoverPlayList.css";

type Props = {
  imagePlaylist: string;
  title: string;
  link?: string;
};

const CoverPlayList = ({ imagePlaylist, title }: Props) => {
  return (
    <div className="styleRoot">
      <img className="styleImageCover" src={imagePlaylist} />
      <p className="styleTitle">{title}</p>
    </div>
  );
};

export default CoverPlayList;
