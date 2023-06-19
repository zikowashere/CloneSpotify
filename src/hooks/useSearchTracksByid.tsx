import { useContext, useEffect, useState } from "react";
import { TrackContext } from "./SearchTracksByArtistContext";
import { accessToken } from "../../global";

export const useSearchTrackById = () => {
  const { track, setTrack, setTopTrack, setShowPlaylist } =
    useContext(TrackContext);

  async function getTrackByIdArtist(id: string) {
    try {
      const response = await fetch(
        `https://api.spotify.com/v1/artists/${id}/top-tracks?market=fr`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (response.ok) {
        const data = await response.json();

        setTrack(data.tracks);
      } else {
        console.log("La requête n'a pas abouti :", response.status);
      }
    } catch (error) {
      console.log("Une erreur s'est produite :", error);
    }
  }
  async function getTopTrackByIdArtist(id: string) {
    try {
      const response = await fetch(
        `https://api.spotify.com/v1/artists/${id}/top-tracks?market=fr`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (response.ok) {
        const data = await response.json();

        setTopTrack(data.tracks);
      } else {
        console.log("La requête n'a pas abouti :", response.status);
      }
    } catch (error) {
      console.log("Une erreur s'est produite :", error);
    }
  }
  async function getTrackByPlayslist(link: string) {
    try {
      const response = await fetch(link, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setTrack(data.items);
        setShowPlaylist(true);
      } else {
        console.log("La requête n'a pas abouti :", response.status);
      }
    } catch (error) {
      console.log("Une erreur s'est produite :", error);
    }
  }

  useEffect(() => {
    console.log("La valeur actuelle de tracks :", track);
  }, [track]);

  return { getTrackByIdArtist, getTrackByPlayslist, getTopTrackByIdArtist };
};
