import React, { useContext, useEffect } from "react";
import { TrackContext } from "../hooks/SearchTracksByArtistContext";
import { contextApp } from "../hooks/ContextApp";
import { SearchContext } from "../hooks/SearchContext";
import { useSearch } from "../hooks/useSearch";

const ChoiceSearchBar = () => {
  const track = useContext(TrackContext);
  const showScreenContext = useContext(contextApp);
  const { search, keyword, setAlbum } = useContext(SearchContext);
  const { getAlbumByIdArtist } = useSearch();

  const AlbumOfArtist = async () => {
    try {
      await getAlbumByIdArtist(search.artists.items[0].id);
    } catch (error) {
      console.log("Une erreur s'est produite :", error);
    }
  };

  const InitializeDashboard = () => {
    track.setTrack([]);
    showScreenContext.setShowScreen("");
    track.setShowPlaylist(false);
    setAlbum({});
  };
  useEffect(() => {}, [search, showScreenContext.showScreen]);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        marginBottom: "5%",
      }}
    >
      <div
        style={{
          marginLeft: "2%",
          marginRight: "20%",
          borderRadius: "25%",
        }}
      >
        <button
          style={{
            marginRight: "30%",
            borderRadius: "25%",
            background: "#292929",
            color: "white",
          }}
          onClick={() => InitializeDashboard()}
        >
          &#x2190;
        </button>
      </div>
      {keyword !== "" && (
        <>
          <button
            style={{
              marginRight: "2%",
              borderRadius: "25%",
              background: "#292929",
              color: "white",
            }}
          >
            Tout
          </button>
          <button
            style={{
              marginRight: "2%",
              borderRadius: "25%",
              background: "#292929",
              color: "white",
            }}
            onClick={() => {
              showScreenContext.setShowScreen("artists");
              showScreenContext.setIsClicked(true);
            }}
          >
            Artistes
          </button>
          <button
            style={{
              marginRight: "2%",
              borderRadius: "25%",
              background: "#292929",
              color: "white",
            }}
            onClick={() => {
              showScreenContext.setShowScreen("titres");
              showScreenContext.setIsClicked(true);
            }}
          >
            Titres
          </button>
          <button
            style={{
              marginRight: "2%",
              borderRadius: "25%",
              background: "#292929",
              color: "white",
            }}
            onClick={() => {
              showScreenContext.setShowScreen("albums");
              AlbumOfArtist();
              showScreenContext.setIsClicked(true);
            }}
          >
            Albums
          </button>
          <button
            style={{
              marginRight: "2%",
              borderRadius: "25%",
              background: "#292929",
              color: "white",
            }}
            onClick={() => {
              showScreenContext.setShowScreen("playlists");
              showScreenContext.setIsClicked(true);
            }}
          >
            Playlists
          </button>
          <button
            style={{
              marginRight: "2%",
              borderRadius: "25%",
              background: "#292929",
              color: "white",
            }}
          >
            Profils
          </button>
          <button
            style={{
              marginRight: "2%",
              borderRadius: "25%",
              background: "#292929",
              color: "white",
            }}
          >
            Podcast et emissions
          </button>
        </>
      )}
    </div>
  );
};

export default ChoiceSearchBar;
