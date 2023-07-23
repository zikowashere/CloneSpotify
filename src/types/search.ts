import { artists } from "./artist";
import { playlists } from "./playlist";
import { track, tracks } from "./track";

export type search = {
  artists: artists;
  playlists: playlists;
  tracks: tracks;
};
