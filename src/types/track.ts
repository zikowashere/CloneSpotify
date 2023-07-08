import { album } from "./album";

export interface Album {
  images: { url: string }[];
}
export interface Artist {
  artists: { name: string }[];
  name: string;
}

export type track = {
  name: string;
  album: album;
  uri: string;
  duration_ms: number;
  artists?: Artist[];
  track: { album: album; uri: string };
};
