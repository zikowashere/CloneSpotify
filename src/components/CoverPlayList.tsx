import React from "react";

type Props = {
  imagePlaylist: string;
  title: string;
  link?: string;
};

const CoverPlayList = ({ imagePlaylist, title }: Props) => {
  return (
    <div
      style={{
        backgroundColor: "black",
        display: "flex",
        flexDirection: "row",
        marginBottom: "10px",
      }}
    >
      <img
        style={{
          height: "200px",
          marginRight: "2%",
          alignItems: "center",
          bottom: "10px",
        }}
        src={imagePlaylist}
      />
      <p
        style={{
          color: "white",
          fontSize: "50px",
          fontWeight: "bold",
          justifyContent: "center",
          display: "flex",
          flex: "1",
        }}
      >
        {title}
      </p>
    </div>
  );
};

export default CoverPlayList;
