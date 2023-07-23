import React, { useContext, useEffect } from "react";
import { SearchContext } from "../hooks/SearchContext";
import PlaylistCard from "./PlaylistCard";
import { useSearch } from "../hooks/useSearch";
import { episode } from "../types/episode";

const Episodes = () => {
  const search = useContext(SearchContext);
  const searchPlaylist = useSearch();

  useEffect(() => {
    searchPlaylist.getEpisodesUser();
  });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        top: "10%",
      }}
    >
      {search.episode.map((episode: episode) => (
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
