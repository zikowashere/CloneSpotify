import React, { ChangeEvent, useContext, useEffect } from "react";
import { headerStyle } from "../assets/style/Header";
import { SearchContext } from "../hooks/SearchContext";
import { useSearch } from "../hooks/useSearch";
import spotifyLogo from "../assets/Images/spotifyLogo.jpeg";

const Header = () => {
  const search = useContext(SearchContext);
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
    </div>
  );
};

export default Header;
