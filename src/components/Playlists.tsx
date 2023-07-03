import React, { useContext, useEffect } from "react";
import { SearchContext } from "../hooks/SearchContext";
import PlaylistCard from "./PlaylistCard";
import { contextApp } from "../hooks/ContextApp";

const Playlists = () => {
  const search = useContext(SearchContext);
  const showScreenContext = useContext(contextApp);

  useEffect(() => {
    showScreenContext.setIsClicked(false);
  }, [showScreenContext]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        top: "10%",
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
