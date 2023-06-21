export interface Album {
  images: { url: string }[];
  // Ajoutez d'autres propriétés de l'album si nécessaire
}
export interface Artist {
  artists: { name: string }[];
  name: string;
}

export type track = {
  name: string;
  album: Album;
  uri: string;
  duration_ms: number;
  artists?: Artist[];
};
