import React, { useContext, useEffect } from "react";
import ArtistCard from "./ArtistCard";
import TrackCard from "./TrackCard";
import { useSearchTrackById } from "../hooks/useSearchTracksByid";
import { TrackContext } from "../hooks/SearchTracksByArtistContext";
import { SearchContext } from "../hooks/SearchContext";
import { track } from "../types/track";
import { artist } from "../types/artist";

type Props = {
  artist: artist;
};

const BestArtistTrackResult = ({ artist }: Props) => {
  const { topTrack } = useContext(TrackContext);
  const searchByIdArtist = useSearchTrackById();
  const { search } = useContext(SearchContext);
  useEffect(() => {
    search.artists?.items.length > 0 &&
      searchByIdArtist.getTopTrackByIdArtist(search.artists?.items[0].id);
  }, [topTrack]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
      }}
    >
      <div style={{ marginRight: "10%" }}>
        <ArtistCard
          imageArtist={artist.images[2]?.url}
          title={artist?.name}
          idArtist={artist?.id}
        />
      </div>
      <div
        style={{
          height: "700px",
          overflowY: "scroll",
          width: "100%",
        }}
      >
        {topTrack.map((trackOfArtsit: track) => (
          <TrackCard
            title={trackOfArtsit.name}
            imageArtist={trackOfArtsit.album.images[0]?.url}
            uri={trackOfArtsit?.uri}
            track={trackOfArtsit}
          />
        ))}
      </div>
    </div>
  );
};

export default BestArtistTrackResult;
