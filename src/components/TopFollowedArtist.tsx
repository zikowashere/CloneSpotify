import React, { useContext, useEffect } from "react";
import { useSearch } from "../hooks/useSearch";
import ArtistCard from "./ArtistCard";
import { SearchContext } from "../hooks/SearchContext";

const TopFollowedArtist = () => {
  const { topArtistFollowed } = useSearch();
  const { topArtist } = useContext(SearchContext);

  useEffect(() => {
    topArtistFollowed();
  }, []);

  return (
    <div style={{ display: "flex", width: "100%" }}>
      {topArtist.map((artist) => (
        <ArtistCard
          imageArtist={artist.images[0].url}
          title={artist.name}
          idArtist={artist.id}
        />
      ))}
    </div>
  );
};

export default TopFollowedArtist;
