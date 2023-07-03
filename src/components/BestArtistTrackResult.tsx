import React, { useContext, useEffect } from "react";
import ArtistCard from "./ArtistCard";
import TrackCard from "./TrackCard";
import { useSearchTrackById } from "../hooks/useSearchTracksByid";
import { TrackContext } from "../hooks/SearchTracksByArtistContext";
import { SearchContext } from "../hooks/SearchContext";

type Props = {
  artist: object;
};

const BestArtistTrackResult = ({ artist }: Props) => {
  const { track, topTrack } = useContext(TrackContext);
  const searchByIdArtist = useSearchTrackById();
  const search = useContext(SearchContext);
  useEffect(() => {
    search.search.artists?.items.length > 0 &&
      searchByIdArtist.getTopTrackByIdArtist(
        search.search.artists?.items[0].id
      );
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
          width: "50%",
        }}
      >
        {topTrack.map((trackOfArtsit) => (
          <TrackCard
            title={trackOfArtsit.name}
            imageArtist={trackOfArtsit.album.images[0]?.url}
            uri={trackOfArtsit?.uri}
            track={trackOfArtsit}
            image={trackOfArtsit.album.images[0]?.url}
          />
        ))}
      </div>
    </div>
  );
};

export default BestArtistTrackResult;
