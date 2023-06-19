import React, { useContext } from "react";
import { TrackContext } from "../hooks/SearchTracksByArtistContext";

const ChoiceSearchBar = () => {
  const track = useContext(TrackContext);
  const InitializeDashboard = () => {
    track.setTrack([]);
    track.setShowPlaylist(false);
  };
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
    </div>
  );
};

export default ChoiceSearchBar;
