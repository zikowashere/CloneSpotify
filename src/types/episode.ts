import { tracks } from "./track";

export type episode = {
  id: string;
  name: string;
  tracks: tracks;
  images: { url: string }[];
};
