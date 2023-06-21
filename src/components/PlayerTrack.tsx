import React, { useContext, useEffect, useMemo, useState } from "react";
import playMusicImg from "../assets/Images/playMusic.png";
import pauseMusicImg from "../assets/Images/pauseSpotifyButton.png";
import backMusicImg from "../assets/Images/backSpotify.png";
import nextMusicImg from "../assets/Images/nextSpotify.png";
import { ActionMusic } from "../actions/ActionMusic";
import { contextMusic } from "../hooks/MusicPlayContext";
import ProgressBar from "./ProgressBar";
import { formatTime } from "../../global";
import { track } from "../types/track";

type Props = {
  track: track | undefined;
  durationTrack: number;
  playOrStopTrack: () => void;
};
const PlayerTrack = ({ track, playOrStopTrack, durationTrack }: Props) => {
  const [imagePlayerTrack, setImagePlayerTrack] = useState("");
  const {
    musicPlay,
    stopStratTrack,
    elapsedMs,
    setStopStratTrack,
    setElapsedMs,
  } = useContext(contextMusic);
  const { backTrack, nextTrack, getCurrentState } = ActionMusic();
  const [durationTime, setDurationTime] = useState<string | undefined>("0:00");
  const [durationOfTrack, setDurationOfTrack] = useState<string>();

  useMemo(() => {
    setElapsedMs(0);
    setDurationOfTrack(formatTime(durationTrack));
    setImagePlayerTrack(musicPlay!.album.images[0].url);
  }, [track?.name]);

  useEffect(() => {
    let intervalId = 0;
    if (stopStratTrack && elapsedMs < durationTrack) {
      intervalId = setInterval(() => {
        getCurrentState();
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
    <div
      style={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "50%",
          backgroundColor: "black",
        }}
      >
        <img
          style={{ height: "100%", width: "10%", marginRight: "5px" }}
          src={imagePlayerTrack}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <p style={{ color: "white" }}>{track?.name}</p>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              position: "absolute",
              top: "50%",
            }}
          >
            {track?.artists.map((artist) => (
              <p style={{ color: "grey", fontSize: "12px" }}>{artist.name}</p>
            ))}
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <div
          style={{
            height: "70%",
            backgroundColor: "black",
          }}
        >
          <button
            style={{
              backgroundColor: "white",
              height: "100%",
              alignItems: "center",
              marginRight: "10px",
            }}
            onClick={() => backTrack()}
          >
            <img style={{ height: "20px", width: "20px" }} src={backMusicImg} />
          </button>

          <button
            style={{
              backgroundColor: "white",
              height: "100%",
              alignItems: "center",
              marginRight: "10px",
            }}
            onClick={() => playOrStopTrack()}
          >
            {stopStratTrack ? (
              <img
                style={{ height: "20px", width: "20px" }}
                src={pauseMusicImg}
              />
            ) : (
              <img
                style={{ height: "20px", width: "20px" }}
                src={playMusicImg}
              />
            )}
          </button>
          <button
            style={{
              backgroundColor: "white",
              height: "100%",
              alignItems: "center",
            }}
            onClick={() => nextTrack()}
          >
            <img style={{ height: "20px", width: "20px" }} src={nextMusicImg} />
          </button>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flex: 1,
            top: "20%",
            height: "4%",
            border: "1px 1px white",
          }}
        >
          <p
            style={{
              color: "grey",
              position: "absolute",
              bottom: "15%",
              height: "4%",
              left: "35%",
              fontSize: "12",
            }}
          >
            {durationTime}
          </p>

          <ProgressBar trackDuration={durationTrack} currentTime={elapsedMs} />

          <p
            style={{
              color: "grey",
              position: "absolute",
              right: "25%",
              fontSize: "12",
              bottom: "15%",
              height: "4%",
            }}
          >
            {durationOfTrack}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PlayerTrack;
