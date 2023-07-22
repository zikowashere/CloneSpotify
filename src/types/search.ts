import { artists } from "./artist";
import { track, tracks } from "./track";

export type search = {
  artists: artists;
  playlists: never[];
  tracks: tracks;
};
