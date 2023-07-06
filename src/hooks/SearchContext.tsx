import React, {
  createContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

export type SearchContextType = {
  keyword: string;
  search: never[];
  playlist: never[];
  episode: never[];
  topArtist: never[];
  albums: never[];
  setSearch: Dispatch<SetStateAction<never[]>>;
  setPlaylist: Dispatch<SetStateAction<never[]>>;
  setEpisode: Dispatch<SetStateAction<never[]>>;
  setTopArtist: Dispatch<SetStateAction<never[]>>;
  setAlbums: Dispatch<SetStateAction<never[]>>;
  setKeyWord: Dispatch<SetStateAction<string>>;
};

export const SearchContext = createContext<SearchContextType>({
  search: [],
  albums: [],
  setAlbums: () => {
    // Faites rien ici
  },
  keyword: "",
  setKeyWord: () => {
    // Faites rien ici
  },

  setSearch: () => {
    // Faites rien ici
  },
  playlist: [],
  setPlaylist: () => {
    // Faites rien ici
  },
  topArtist: [],
  setTopArtist: () => {
    // Faites rien ici
  },
  episode: [],
  setEpisode: () => {
    // Faites rien ici
  },
});

type Props = {
  children: ReactNode;
};

export const SearchProvider = ({ children }: Props) => {
  const [search, setSearch] = useState<never[]>([]);
  const [playlist, setPlaylist] = useState<never[]>([]);
  const [episode, setEpisode] = useState<never[]>([]);
  const [topArtist, setTopArtist] = useState<never[]>([]);
  const [albums, setAlbums] = useState<never[]>([]);
  const [keyword, setKeyWord] = useState("");

  const contextValue: SearchContextType = {
    search,
    albums,
    keyword,
    topArtist,
    setSearch,
    playlist,
    episode,
    setEpisode,
    setPlaylist,
    setTopArtist,
    setKeyWord,
    setAlbums,
  };

  return (
    <SearchContext.Provider value={contextValue}>
      {children}
    </SearchContext.Provider>
  );
};
