import React, { Dispatch, ReactNode, SetStateAction, useState } from "react";
import {  trackCard } from "../types/track";

type Props = {
  children: ReactNode;
};
export type ContextTypeMusic = {
  musicPlay: trackCard | undefined;
  isPlaying: boolean;
  stopStratTrack: boolean;
  elapsedMs: number;
  setMusicPlay: Dispatch<SetStateAction<trackCard | undefined>>;
  setIsPlaying: Dispatch<SetStateAction<boolean>>;
  setStopStratTrack: Dispatch<SetStateAction<boolean>>;
  setElapsedMs: Dispatch<SetStateAction<number>>;
};
export const contextMusic = React.createContext<ContextTypeMusic>({
  musicPlay: {
    name: "",
    album: { id: "", name: "", images: [], artists: [] },
    uri: "",
    duration_ms: 0,
    artists: [],
    
  },
  isPlaying: false,
  stopStratTrack: false,
  elapsedMs: 0,
  setMusicPlay: () => {
    /* test */
  },
  setIsPlaying: () => {
    /* test */
  },
  setStopStratTrack: () => {
    /* test */
  },
  setElapsedMs: () => {
    /* test */
  },
});
export const MusicPlayProvider = ({ children }: Props) => {
  const [musicPlay, setMusicPlay] = useState<trackCard | undefined>();
  const [isPlaying, setIsPlaying] = useState(false);
  const [stopStratTrack, setStopStratTrack] = useState(false);
  const [elapsedMs, setElapsedMs] = useState(0);

  return (
    <contextMusic.Provider
      value={{
        musicPlay,
        setMusicPlay,
        isPlaying,
        elapsedMs,
        setIsPlaying,
        stopStratTrack,
        setStopStratTrack,
        setElapsedMs,
      }}
    >
      {children}
    </contextMusic.Provider>
  );
};
