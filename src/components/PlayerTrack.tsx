import React, { useContext, useEffect, useState } from "react";
import playMusicImg from "../assets/Images/playMusic.png";
import pauseMusicImg from "../assets/Images/pauseSpotifyButton.png";
import backMusicImg from "../assets/Images/backSpotify.png";
import nextMusicImg from "../assets/Images/nextSpotify.png";
import { ActionMusic } from "../actions/ActionMusic";
import { contextMusic } from "../hooks/MusicPlayContext";
import ProgressBar from "./ProgressBar";
import { formatTime } from "../../global";
import { track } from "../types/track";
import { SearchContext } from "../hooks/SearchContext";
import {
  styleArtistTrack,
  styleDurationTime,
  styleDurationTrack,
  styleFirstDivPlayerTrack,
  styleImageButton,
  styleImageTarck,
  styleRoot,
  styleRootButtonsPlayerTrack,
  styleTrackButton,
} from "../assets/style/PlayerTrack";

type Props = {
  track: track | undefined;
  durationTrack: number;
};
const PlayerTrack = ({ track, durationTrack }: Props) => {
  const [imagePlayerTrack, setImagePlayerTrack] = useState<string | undefined>(
    ""
  );
  const {
    musicPlay,
    stopStratTrack,
    elapsedMs,
    setStopStratTrack,
    setElapsedMs,
  } = useContext(contextMusic);
  const { album } = useContext(SearchContext);
  const { backTrack, nextTrack, getCurrentPlaybackTime } = ActionMusic();
  const [durationTime, setDurationTime] = useState<string | undefined>("0:00");
  const [durationOfTrack, setDurationOfTrack] = useState<string>();
  const { playTrack, pauseTrack } = ActionMusic();

  const playTrackArtistOrPlaylist = () => {
    playTrack(musicPlay, elapsedMs);
  };
  const playMusicOrStop = () => {
    setStopStratTrack(!stopStratTrack);
    stopStratTrack ? pauseTrack() : playTrackArtistOrPlaylist();
  };

  useEffect(() => {
    setElapsedMs(0);
    setDurationOfTrack(formatTime(durationTrack));
    setImagePlayerTrack(track?.album?.images[0]?.url);
  }, [musicPlay, album]);

  useEffect(() => {
    let intervalId: number | undefined;
    if (stopStratTrack && elapsedMs < durationTrack) {
      intervalId = setInterval(() => {
        getCurrentPlaybackTime();
        setDurationTime(formatTime(elapsedMs));
      }, 1000);
    } else {
      //setElapsedMs(elapsedMs);
      setStopStratTrack(false);
    }
    return () => {
      clearInterval(intervalId);
    };
  }, [stopStratTrack, elapsedMs]);

  return (
    <div style={styleRoot}>
      <div style={styleFirstDivPlayerTrack}>
        <img style={styleImageTarck} src={imagePlayerTrack} />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <p style={{ color: "white" }}>{track?.name}</p>
          <div style={styleArtistTrack}>
            {track?.artists?.map((artist) => (
              <p style={{ color: "grey", fontSize: "12px" }}>{artist.name}</p>
            ))}
          </div>
        </div>
      </div>
      <div style={styleRootButtonsPlayerTrack}>
        <div
          style={{
            height: "70%",
            backgroundColor: "black",
          }}
        >
          <button style={styleTrackButton} onClick={() => backTrack()}>
            <img style={styleImageButton} src={backMusicImg} />
          </button>

          <button style={styleTrackButton} onClick={() => playMusicOrStop()}>
            {stopStratTrack ? (
              <img style={styleImageButton} src={pauseMusicImg} />
            ) : (
              <img style={styleImageButton} src={playMusicImg} />
            )}
          </button>
          <button style={styleTrackButton} onClick={() => nextTrack()}>
            <img style={styleImageButton} src={nextMusicImg} />
          </button>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flex: 1,
            height: "4%",
          }}
        >
          <p style={styleDurationTime}>{durationTime}</p>

          <ProgressBar trackDuration={durationTrack} currentTime={elapsedMs} />

          <p style={styleDurationTrack}>{durationOfTrack}</p>
        </div>
      </div>
    </div>
  );
};

export default PlayerTrack;
