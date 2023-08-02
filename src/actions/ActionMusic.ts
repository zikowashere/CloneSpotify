import { useContext, useEffect, useMemo, useState } from "react";
import { accessToken } from "../../global";
import { contextMusic } from "../hooks/MusicPlayContext";
import { track, trackCard } from "../types/track";

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

    await fetch(`https://api.spotify.com/v1/me/player/play`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        uris: [track?.uri],
        position_ms: elapsedMs,
      }),
    });
  };

  const pauseTrack = async () => {
    setStopStratTrack(false);
    await fetch(`https://api.spotify.com/v1/me/player/pause`, {
      method: "PUT",
      headers: { Authorization: `Bearer ${accessToken}` },
    });
  };

  const backTrack = async () => {
    await fetch(`https://api.spotify.com/v1/me/player/previous`, {
      method: "POST",
      headers: { Authorization: `Bearer ${accessToken}` },
    });
  };

  const nextTrack = async () => {
    await fetch(`https://api.spotify.com/v1/me/player/next`, {
      method: "POST",
      headers: { Authorization: `Bearer ${accessToken}` },
    })
      .then((response) => {
        console.log("Piste suivante jouée avec succès !");
        response.json().then((data) => console.log("next track", data));
      })
      .catch((error) => {
        console.error(
          "Erreur lors de la lecture de la piste suivante :",
          error.response.data
        );
      });
  };

  const getCurrentPlaybackTime = async () => {
    fetch(`https://api.spotify.com/v1/me/player/currently-playing`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((response) =>
        response.json().then((data) => {
          setElapsedMs(data.progress_ms);
        })
      )
      .catch((error) => {
        console.error("Une erreur s'est produite lors de la demande :", error);
      });
  };

  const getCurrentState = async () => {
    fetch(`https://api.spotify.com/v1/me/player`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }).then((res) => {
      res.json().then((data) => {
        setElapsedMs(data.progress_ms);
        setDurationTrack(data.item.duration_ms);
      });
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
