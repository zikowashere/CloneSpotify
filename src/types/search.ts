import { artists } from "./artist";
import { playlist, playlists } from "./playlist";
import { track, tracks } from "./track";

export type search = {
  artists: artists;
  playlists: playlists;
  tracks: tracks;
};
