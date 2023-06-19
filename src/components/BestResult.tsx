import React, { useContext, useEffect } from "react";
import ArtistCard from "./ArtistCard";
import TrackCard from "./TrackCard";
import { useSearchTrackById } from "../hooks/useSearchTracksByid";
import { TrackContext } from "../hooks/SearchTracksByArtistContext";
import { SearchContext } from "../hooks/SearchContext";

type Props = {
  artist: object;
};

const BestResult = ({ artist }: Props) => {
  const { track, topTrack } = useContext(TrackContext);
  const searchByIdArtist = useSearchTrackById();
  const search = useContext(SearchContext);
  useEffect(() => {
    search.search.length > 0 &&
      searchByIdArtist.getTopTrackByIdArtist(search.search[0].id);
  }, [topTrack]);

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div style={{ marginRight: "10%" }}>
        <ArtistCard
          imageArtist={artist.images[2]?.url}
          title={artist?.name}
          idArtist={artist?.id}
        />
      </div>
      <div
        style={{
          height: "calc(100vh - 50%)",
          overflowY: "auto",
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

export default BestResult;
