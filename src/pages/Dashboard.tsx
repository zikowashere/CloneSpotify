import { useContext, useEffect, useMemo, useState } from "react";
import { useSearch } from "../hooks/useSearch";
import ChoiceSearchBar from "../components/ChoiceSearchBar";
import { contextMusic } from "../hooks/MusicPlayContext";
import PlayerTrack from "../components/PlayerTrack";
import { ActionMusic } from "../actions/ActionMusic";
import { TrackContext } from "../hooks/SearchTracksByArtistContext";
import Header from "../components/Header";
import Home from "./Home";
import Tracks from "./Tracks";
import SideBar from "../components/SideBar";
import Playlists from "../components/Playlists";
import TrackPlaylist from "./TrackPlaylist";
import Episodes from "../components/Episodes";
import React from "react";
import jwt_decode from "jwt-decode";
import { API_CLIENT } from "../../env.config";
import { ActionInitializer } from "../actions/ActionInitializer";
import { contextApp } from "../hooks/ContextApp";

const Dashboard = () => {
  const searchPlaylist = useSearch();
  const { musicPlay, isPlaying, setElapsedMs } = useContext(contextMusic);
  const { track, showPlayslist } = useContext(TrackContext);
  const contextAll = useContext(contextApp);

  function getTimeRemaining() {
    const expires_in = localStorage.getItem("expires_in");
    const token_timestamp = localStorage.getItem("token_timestamp");

    if (expires_in && token_timestamp) {
      const expiresInSeconds = parseInt(expires_in, 10);
      const currentTime = Math.floor(Date.now() / 1000); // Convertir en secondes

      // Calculer le temps restant en secondes avant l'expiration du token
      const timeRemaining =
        expiresInSeconds - (currentTime - parseInt(token_timestamp, 10));

      return timeRemaining >= 0 ? timeRemaining : 0;
    }

    // Si les clés "expires_in" ou "token_timestamp" ne sont pas présentes, considérer que le token a expiré
    return 0;
  }

  function isAccessTokenExpired() {
    const expires_in = localStorage.getItem("expires_in");
    const currentTime = Date.now() / 1000; // Convertir en secondes
    const expiresInSeconds = parseInt(expires_in ?? "0", 10);
    console.log("expire time and current time", expiresInSeconds, currentTime);
    return currentTime >= expiresInSeconds;
  }

  // Fonction pour obtenir un nouvel access token en utilisant le token de rafraîchissement
  const refreshToken = async () => {
    const refreshToken = localStorage.getItem("refreshToken");
    const code_verifier = localStorage.getItem("code_verifier");
    const clientId = API_CLIENT;
    const body = new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: refreshToken,
      client_id: clientId,
      code_verifier: code_verifier,
    });
    try {
      const response = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
        body: body,
      });
      const data = await response.json();
      // Mettez à jour le token d'accès et la date d'expiration dans l'état de votre composant et stockez également les nouvelles valeurs dans votre application (par exemple, dans localStorage)
      const newAccessToken = data.access_token;
      const expiresIn = data.expires_in;
      const expirationTime = Date.now() + expiresIn * 1000;

      localStorage.setItem("accessToken", newAccessToken);
      localStorage.setItem("expirationTime", expirationTime.toString());

      // Retournez le nouveau token d'accès
      return newAccessToken;
    } catch (error) {
      // Gérez les erreurs éventuelles lors de l'obtention du nouveau token d'accès
      console.error(
        "Erreur lors de l'obtention du nouvel access token :",
        error
      );
      return null;
    }
  };

  useEffect(() => {
    getTimeRemaining() === 0 && refreshToken();
  });

  return (
    <div>
      <Header />

      <div>
        <ChoiceSearchBar />
      </div>

      <div style={{ display: "flex", flexDirection: "row" }}>
        <div
          style={{
            left: 0,
            width: "15%",
            backgroundColor: "#1E1D1D",
            borderRadius: "10px",
          }}
        >
          <p
            style={{
              color: "white",
              fontSize: "20px",
              fontWeight: "bold",
              marginLeft: "10%",
            }}
          >
            {" "}
            Playlists{" "}
          </p>
          <div style={{ height: "70%", overflowY: "scroll" }}>
            <SideBar
              children={
                <>
                  <Playlists />
                  <Episodes />
                </>
              }
            />
          </div>
        </div>

        <div
          style={{
            display: "flex",
            marginLeft: "5%",
            width: "100%",
            justifyContent: "center",
          }}
        >
          {track.length > 0 ? (
            <>{showPlayslist ? <TrackPlaylist /> : <Tracks />}</>
          ) : (
            <Home />
          )}
        </div>
      </div>

      <div
        style={{
          position: "fixed",
          backgroundColor: "black",
          bottom: 0,
          height: "7%",
          width: "100%",
        }}
      >
        {isPlaying && (
          <PlayerTrack
            track={musicPlay}
            durationTrack={musicPlay!.duration_ms}
          />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
