import React, { useContext } from "react";
import { SearchContext } from "../hooks/SearchContext";
import PlaylistCard from "./PlaylistCard";

const Episodes = () => {
  const search = useContext(SearchContext);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        top: "10%",
      }}
    >
      {search.episode.map((episode) => (
        <PlaylistCard
          title={episode?.name}
          imagePlaylsit={episode.images[0]?.url}
          link={episode.tracks?.href}
        />
      ))}
    </div>
  );
};

export default Episodes;
