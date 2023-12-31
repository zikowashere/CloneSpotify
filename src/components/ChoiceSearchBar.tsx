import React, { useContext, useEffect } from "react";
import { TrackContext } from "../hooks/SearchTracksByArtistContext";
import { contextApp } from "../hooks/ContextApp";
import { SearchContext } from "../hooks/SearchContext";
import { useSearch } from "../hooks/useSearch";
import "../assets/style/ChoiceSearchBar.css";

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
  };
  useEffect(() => {
    setAlbum({
      id: "",
      name: "",
      images: [],
      artists: [],
    });
  }, [showScreenContext.showScreen]);
  return (
    <div className="styleRootChoiceBar">
      <div className="styleFirstDivChoiceBar">
        <button
          className="styleBackButton"
          onClick={() => InitializeDashboard()}
        >
          &#x2190;
        </button>
      </div>
      {keyword !== "" && (
        <>
          <button
            className="styleButton"
            onClick={() => {
              showScreenContext.setShowScreen("artists");
              showScreenContext.setIsClicked(true);
            }}
          >
            Artistes
          </button>
          <button
            className="styleButton"
            onClick={() => {
              showScreenContext.setShowScreen("titres");
              showScreenContext.setIsClicked(true);
            }}
          >
            Titres
          </button>
          <button
            className="styleButton"
            onClick={() => {
              showScreenContext.setShowScreen("albums");
              AlbumOfArtist();
              showScreenContext.setIsClicked(true);
            }}
          >
            Albums
          </button>
          <button
            className="styleButton"
            onClick={() => {
              showScreenContext.setShowScreen("playlists");
              showScreenContext.setIsClicked(true);
            }}
          >
            Playlists
          </button>
        </>
      )}
    </div>
  );
};

export default ChoiceSearchBar;
