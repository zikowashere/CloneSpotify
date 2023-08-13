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
    ActionMusicService().play(track, elapsedMs);
  };

  const pauseTrack = async () => {
    setStopStratTrack(false);
    ActionMusicService().pauseTrack();
  };

  const backTrack = async () => {
    ActionMusicService().backTrack();
  };

  const nextTrack = async () => {
    ActionMusicService()
      .nextTrack()
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
    ActionMusicService()
      .currentPlayingTrack()
      .then((response) => {
        setElapsedMs(response.data.progress_ms);
      })
      .catch((error) => {
        console.error("Une erreur s'est produite lors de la demande :", error);
      });
  };

  const getCurrentState = async () => {
    ActionMusicService()
      .currentState()
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
