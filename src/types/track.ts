import { album } from "./album";
import { artist } from "./artist";

export type track = {
  name: string;
  album: album;
  uri: string;
  duration_ms: number;
  artists: artist[];
  track: {
    name: string;
    album: album;
    uri: string;
    duration_ms: number;
    artists: artist[];
    track: track;
  };
};

export type tracks = {
  tracks: track[];
  items: never[];
  href: string;
};
