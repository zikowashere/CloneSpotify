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
import {
  styleFirstDiv,
  styleGridOne,
  styleGridThree,
  styleGridTwo,
  styleRootFirstDiv,
} from "../assets/style/AllResults";

const AllResults = () => {
  const { search, albums } = useContext(SearchContext);
  const showScreenContext = useContext(contextApp);

  return (
    <div style={styleRootFirstDiv}>
      <div style={styleGridOne}>
        {showScreenContext.showScreen === "artists" &&
          search.artists?.items.map((artist) => (
            <ArtistCard
              imageArtist={artist.images[0]?.url}
              title={artist.name}
              idArtist={artist.id}
            />
          ))}
      </div>
      <div style={styleGridTwo}>
        {showScreenContext.showScreen === "playlists" &&
          search.playlists?.items.map((playlist: playlist) => (
            <PlaylistCard
              imagePlaylsit={playlist.images[0]?.url}
              title={playlist.name}
              link={playlist.tracks?.href}
            />
          ))}
      </div>

      <div style={styleGridThree}>
        {showScreenContext.showScreen === "albums" &&
          albums?.map((album: album) => (
            <AlbumArtist
              imageAlbum={album.images[0]?.url}
              title={album.artists[0].name}
              idAlbum={album.id}
            />
          ))}
      </div>

      <div style={styleFirstDiv}>
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
