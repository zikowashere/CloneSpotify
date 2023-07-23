export type playlist = {
  name: string;
  images: { url: string }[];
  tracks: { href: string };
};
export type playlists = {
  items: never[];
};
