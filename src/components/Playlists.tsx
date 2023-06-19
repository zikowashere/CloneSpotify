import React, { useContext } from "react";
import { SearchContext } from "../hooks/SearchContext";
import PlaylistCard from "./PlaylistCard";

const Playlists = () => {
  const search = useContext(SearchContext);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        top: "10%",
        height: "50%",
      }}
    >
      {search.playlist.map((playlist) => (
        <PlaylistCard
          title={playlist?.name}
          imagePlaylsit={playlist.images[0]?.url}
          link={playlist.tracks?.href}
        />
      ))}
    </div>
  );
};

export default Playlists;
