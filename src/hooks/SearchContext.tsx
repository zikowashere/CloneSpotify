import React, {
  createContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

export type SearchContextType = {
  search: never[];
  playlist: never[];
  episode: never[];
  topArtist: never[];
  setSearch: Dispatch<SetStateAction<never[]>>;
  setPlaylist: Dispatch<SetStateAction<never[]>>;
  setEpisode: Dispatch<SetStateAction<never[]>>;
  setTopArtist: Dispatch<SetStateAction<never[]>>;
};

export const SearchContext = createContext<SearchContextType>({
  search: [],

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

  const contextValue: SearchContextType = {
    search,
    topArtist,
    setSearch,
    playlist,
    episode,
    setEpisode,
    setPlaylist,
    setTopArtist,
  };

  return (
    <SearchContext.Provider value={contextValue}>
      {children}
    </SearchContext.Provider>
  );
};
