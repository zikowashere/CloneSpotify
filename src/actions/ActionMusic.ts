import { useContext, useEffect, useMemo, useState } from "react";
import { accessToken } from "../../global";
import { contextMusic } from "../hooks/MusicPlayContext";
import { track, trackCard } from "../types/track";
import axios from "axios";

export const ActionMusic = () => {
  const [durationTrack, setDurationTrack] = useState(0);
  const {
    setMusicPlay,
    isPlaying,
    setIsPlaying,
    setStopStratTrack,
    setElapsedMs,
    elapsedMs,
    musicPlay,
  } = useContext(contextMusic);
  useMemo(() => {
    setElapsedMs(0);
  }, [musicPlay]);
  useEffect(() => {
    /** */
  }, [elapsedMs]);

  const playTrack = async (track: trackCard | undefined, elapsedMs: number) => {
    setIsPlaying(true);
    setStopStratTrack(true);
    setMusicPlay(track);

    await axios.put(
      "https://api.spotify.com/v1/me/player/play",
      {
        uris: [track?.uri],
        position_ms: elapsedMs,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
  };

  const pauseTrack = async () => {
    setStopStratTrack(false);
    await axios.put(`https://api.spotify.com/v1/me/player/pause`, null, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });
  };

  const backTrack = async () => {
    await axios.post(`https://api.spotify.com/v1/me/player/previous`, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
  };

  const nextTrack = async () => {
    await axios
      .post(`https://api.spotify.com/v1/me/player/next`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then((response) => {
        console.log("Piste suivante jouée avec succès !");
        console.log("next track", response.data);
      })
      .catch((error) => {
        console.error(
          "Erreur lors de la lecture de la piste suivante :",
          error.response.data
        );
      });
  };

  const getCurrentPlaybackTime = async () => {
    axios
      .get(`https://api.spotify.com/v1/me/player/currently-playing`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) => {
        setElapsedMs(response.data.progress_ms);
      })
      .catch((error) => {
        console.error("Une erreur s'est produite lors de la demande :", error);
      });
  };

  const getCurrentState = async () => {
    axios
      .get(`https://api.spotify.com/v1/me/player`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((res) => {
        setElapsedMs(res.data.progress_ms);
        setDurationTrack(res.data.item.duration_ms);
      });
  };

  return {
    pauseTrack,
    backTrack,
    nextTrack,
    getCurrentPlaybackTime,
    durationTrack,
    setDurationTrack,
    isPlaying,
    playTrack,
    getCurrentState,
  };
};
