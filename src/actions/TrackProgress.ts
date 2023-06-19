import React, { useState, useEffect, useContext } from 'react';
import { ActionMusic } from './ActionMusic';
import { contextMusic } from '../hooks/MusicPlayContext';
type Props ={
    durationMs:number
}

const TrackProgress = ({ durationMs }:Props) => {
  const {isPlaying,setIsPlaying}= useContext(contextMusic)
  const [elapsedMs, setElapsedMs] = useState(0);

  useEffect(() => {
    let intervalId=0;

    if (isPlaying) {
      intervalId = setInterval(() => {
        setElapsedMs(prevElapsedMs => prevElapsedMs + 1000);
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isPlaying]);

  const formattedTime = formatTime(elapsedMs);

  const handlePause = () => {
    setIsPlaying(false);
  };

  const handleResume = () => {
    setIsPlaying(true);
  };

  

function formatTime(milliseconds) {
  const totalSeconds = Math.floor(milliseconds / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

export default TrackProgress;
