import { artists } from "./artist";
import { track } from "./track";

export type search = {
  artists: artists;
  playlists: never[];
  tracks: track[];
};
