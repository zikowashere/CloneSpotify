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
import "../assets/style/AllResults.css";

const AllResults = () => {
  const { search, albums } = useContext(SearchContext);
  const showScreenContext = useContext(contextApp);

  return (
    <div className="styleRootFirstDiv">
      <div className="styleGridOne">
        {showScreenContext.showScreen === "artists" &&
          search.artists?.items.map((artist) => (
            <ArtistCard
              imageArtist={artist.images[0]?.url}
              title={artist.name}
              idArtist={artist.id}
            />
          ))}
      </div>
      <div className="styleGridTwo">
        {showScreenContext.showScreen === "playlists" &&
          search.playlists?.items.map((playlist: playlist) => (
            <PlaylistCard
              imagePlaylsit={playlist.images[0]?.url}
              title={playlist.name}
              link={playlist.tracks?.href}
            />
          ))}
      </div>

      <div className="styleGridThree">
        {showScreenContext.showScreen === "albums" &&
          albums?.map((album: album) => (
            <AlbumArtist
              imageAlbum={album.images[0]?.url}
              title={album.artists[0].name}
              idAlbum={album.id}
            />
          ))}
      </div>

      <div className="styleFirstDiv">
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
