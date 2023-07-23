import { album } from "./album";

export interface Artist {
  artists: { name: string }[];
  name: string;
}

export type track = {
  name: string;
  album: album;
  uri: string;
  duration_ms: number;
  artists: Artist[];
  track: track;
};
export type tracks = {
  tracks: track[];
  items: any[];
  href: string;
};
