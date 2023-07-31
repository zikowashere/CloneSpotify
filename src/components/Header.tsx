import React, { ChangeEvent, useContext, useEffect, useMemo } from "react";
import { styleHeader, styleSearch } from "../assets/style/Header";
import { SearchContext } from "../hooks/SearchContext";
import { useSearch } from "../hooks/useSearch";
import spotifyLogo from "../assets/Images/spotifyLogo.jpeg";
import { ActionInitializer } from "../actions/ActionInitializer";
import { contextApp } from "../hooks/ContextApp";
import Disconnect from "./Disconnect";

const Header = () => {
  const search = useContext(SearchContext);
  const contextAll = useContext(contextApp);

  const { searchKeyWord } = useSearch();

  const searchForKeyWord = (e: ChangeEvent<HTMLInputElement>) => {
    search.setKeyWord(e.target.value);
    searchKeyWord(search.keyword);
  };

  useEffect(() => {
    search.keyword === "" &&
      search.setSearch({
        artists: { artists: [], items: [] },
        playlists: { items: [] },
        tracks: { tracks: [], href: "", items: [] },
      });
  }, [search]);

  return (
    <div style={styleHeader}>
      <img
        style={{
          height: "70px",
          marginTop: "1%",
          marginLeft: "9px",
        }}
        src={spotifyLogo}
      />
      <input
        type="text"
        value={search.keyword}
        placeholder="Que souhaitez-vous écouter? "
        style={styleSearch}
        title="Search"
        onChange={(e) => searchForKeyWord(e)}
      />
      <Disconnect userName={contextAll.user.display_name} />
    </div>
  );
};

export default Header;
