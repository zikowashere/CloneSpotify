import React, { ChangeEvent, useContext, useEffect, useMemo } from "react";
import { headerStyle } from "../assets/style/Header";
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

  const searchForKeyWord = (e: ChangeEvent) => {
    search.setKeyWord(e.target.value);
    searchKeyWord(search.keyword);
  };

  useEffect(() => {
    search.keyword === "" && search.setSearch([]);
  }, [search]);

  return (
    <div style={headerStyle.styleHeader}>
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
        style={headerStyle.styleSearch}
        title="Search"
        onChange={(e) => searchForKeyWord(e)}
      />
      <Disconnect userName={contextAll.user.display_name} />
    </div>
  );
};

export default Header;
