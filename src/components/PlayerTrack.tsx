import React, { useContext, useEffect, useState } from "react";
import playMusicImg from "../assets/Images/playMusic.png";
import pauseMusicImg from "../assets/Images/pauseSpotifyButton.png";
import backMusicImg from "../assets/Images/backSpotify.png";
import nextMusicImg from "../assets/Images/nextSpotify.png";
import { ActionMusic } from "../actions/ActionMusic";
import { contextMusic } from "../hooks/MusicPlayContext";
import ProgressBar from "./ProgressBar";
import { formatTime } from "../../global";
import { track, trackCard } from "../types/track";
import { SearchContext } from "../hooks/SearchContext";
import "../assets/style/PlayerTrack.css";

type Props = {
  track: trackCard | undefined;
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
    <div className="styleRoot">
      <div className="styleFirstDivPlayerTrack">
        <img className="styleImageTarck" src={imagePlayerTrack} />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <p style={{ color: "white" }}>{track?.name}</p>
          <div className="styleArtistTrack">
            {track?.artists?.map((artist) => (
              <p style={{ color: "grey", fontSize: "12px" }}>{artist.name}</p>
            ))}
          </div>
        </div>
      </div>
      <div className="styleRootButtonsPlayerTrack">
        <div
          style={{
            height: "70%",
            backgroundColor: "black",
          }}
        >
          <button className="styleTrackButton" onClick={() => backTrack()}>
            <img className="styleImageButton" src={backMusicImg} />
          </button>

          <button
            className="styleTrackButton"
            onClick={() => playMusicOrStop()}
          >
            {stopStratTrack ? (
              <img className="styleImageButton" src={pauseMusicImg} />
            ) : (
              <img className="styleImageButton" src={playMusicImg} />
            )}
          </button>
          <button className="styleTrackButton" onClick={() => nextTrack()}>
            <img className="styleImageButton" src={nextMusicImg} />
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
          <p className="styleDurationTime">{durationTime}</p>

          <ProgressBar trackDuration={durationTrack} currentTime={elapsedMs} />

          <p className="styleDurationTrack">{durationOfTrack}</p>
        </div>
      </div>
    </div>
  );
};

export default PlayerTrack;
