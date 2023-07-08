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

type Props = {
  track: track | undefined;
  durationTrack: number;
};
const PlayerTrack = ({ track, durationTrack }: Props) => {
  const [areEmpty, setAreEmpty] = useState(false);
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
    setAreEmpty(
      Object.values(album).some((valeur) => {
        return valeur === null || valeur === undefined || valeur === "";
      })
    );
    areEmpty
      ? setImagePlayerTrack(album?.images[0]?.url)
      : setImagePlayerTrack(musicPlay?.album?.images[0]?.url);
  }, [musicPlay]);

  useEffect(() => {
    let intervalId;
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
            {track?.artists?.map((artist) => (
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
            onClick={() => playMusicOrStop()}
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
            height: "4%",
          }}
        >
          <p
            style={{
              color: "grey",
              position: "absolute",
              bottom: "10%",
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
              bottom: "10%",
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
