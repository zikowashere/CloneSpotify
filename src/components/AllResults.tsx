import React, { useContext, useEffect } from "react";
import { contextApp } from "../hooks/ContextApp";
import { SearchContext } from "../hooks/SearchContext";
import ArtistCard from "./ArtistCard";
import TrackCard from "./TrackCard";
import PlaylistCard from "./PlaylistCard";
import AlbumArtist from "./AlbumArtist";
import { album } from "../types/album";
import { track } from "../types/track";
import { playlist } from "../types/playlist";

const AllResults = () => {
  const { search, albums } = useContext(SearchContext);
  const showScreenContext = useContext(contextApp);
  useEffect(() => {
    console.log("show screen", showScreenContext.showScreen);
  }, [showScreenContext.showScreen]);

  return (
    <div
      style={{
        display: "flex",
        justifyItems: "center",
        height: "calc(100vh - 10%)",
        overflowY: "auto",
        width: "100%",
        marginLeft: "15%",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr ",
          gridGap: "5%",
        }}
      >
        {showScreenContext.showScreen === "artists" &&
          search.artists?.items.map((artist) => (
            <ArtistCard
              imageArtist={artist.images[0]?.url}
              title={artist.name}
              idArtist={artist.id}
            />
          ))}
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr ",
          gridGap: "5%",
        }}
      >
        {showScreenContext.showScreen === "playlists" &&
          search.playlists?.items.map((playlist: playlist) => (
            <PlaylistCard
              imagePlaylsit={playlist.images[0]?.url}
              title={playlist.name}
              link={playlist.tracks?.href}
            />
          ))}
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr ",
          gridGap: "5%",
        }}
      >
        {showScreenContext.showScreen === "albums" &&
          albums?.map((album: album) => (
            <AlbumArtist
              imageAlbum={album.images[0]?.url}
              title={album.artists[0].name}
              idAlbum={album.id}
            />
          ))}
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        {showScreenContext.showScreen === "titres" &&
          search.tracks?.items.map((trackOfArtsit: track) => (
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

export default AllResults;
