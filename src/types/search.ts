import { artists } from "./artist";
import { playlist } from "./playlist";
import { track } from "./track";

export type search = {
  artists: artists;
  playlists: playlist[];
  tracks: track[];
};
