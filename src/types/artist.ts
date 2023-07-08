export type artist = {
  id: string;
  name: string;
  images: { url: string }[];
};

export interface artists {
  artists: artist[];
  items: { id: string; name: string; images: { url: string }[] }[];
}
