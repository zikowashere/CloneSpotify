import axios from "axios";
import { accessToken } from "../../global";
import { track, trackCard } from "../types/track";

export const ActionMusicService = () => {
  const play = async (track: trackCard | undefined, elapsedMs: number) => {
    return await axios.put(
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
    return await axios.put(`https://api.spotify.com/v1/me/player/pause`, null, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });
  };
  const backTrack = async () => {
    return await axios.post(`https://api.spotify.com/v1/me/player/previous`, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
  };
  const nextTrack = async () => {
    return await axios.post(`https://api.spotify.com/v1/me/player/next`, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
  };
  const currentPlayingTrack = async () => {
    return await axios.get(
      `https://api.spotify.com/v1/me/player/currently-playing`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
  };

  const currentState = async () => {
    return await axios.get(`https://api.spotify.com/v1/me/player`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  };
  return {
    play,
    pauseTrack,
    backTrack,
    nextTrack,
    currentPlayingTrack,
    currentState,
  };
};
