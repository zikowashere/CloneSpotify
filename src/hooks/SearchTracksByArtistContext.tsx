import React, {
  createContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import { track, tracks } from "../types/track";

export type TrackContextType = {
  track: track[];
  topTrack: never[];
  showPlayslist: boolean;
  setTrack: Dispatch<SetStateAction<track[]>>;
  setShowPlaylist: Dispatch<SetStateAction<boolean>>;
  setTopTrack: Dispatch<SetStateAction<never[]>>;
};

export const TrackContext = createContext<TrackContextType>({
  track: [],
  topTrack: [],
  showPlayslist: false,
  setTrack: () => {
    // Test
  },
  setShowPlaylist: () => {
    // Test
  },
  setTopTrack: () => {
    // Test
  },
});

type Props = {
  children: ReactNode;
};

export const TrackProvider = ({ children }: Props) => {
  const [track, setTrack] = useState<track[]>([]);
  const [topTrack, setTopTrack] = useState<never[]>([]);
  const [showPlayslist, setShowPlaylist] = useState(false);

  const contextValue: TrackContextType = {
    track,
    topTrack,
    setTrack,
    showPlayslist,
    setShowPlaylist,
    setTopTrack,
  };

  return (
    <TrackContext.Provider value={contextValue}>
      {children}
    </TrackContext.Provider>
  );
};
