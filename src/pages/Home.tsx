import { useContext, useEffect } from "react";
import { SearchContext } from "../hooks/SearchContext";
import { useSearch } from "../hooks/useSearch";
import TopFollowedArtist from "../components/TopFollowedArtist";
import { contextMusic } from "../hooks/MusicPlayContext";
import React from "react";
import BestArtistTrackResult from "../components/BestArtistTrackResult";
import { contextApp } from "../hooks/ContextApp";
import AllResults from "../components/AllResults";

const Home = () => {
  const { search } = useContext(SearchContext);
  const musicContext = useContext(contextMusic);
  const showScreenContext = useContext(contextApp);
  const searchPlaylist = useSearch();

  useEffect(() => {
    searchPlaylist.getPlayListUser();
  }, [musicContext.isPlaying, showScreenContext.showScreen]);

  return (
    <div style={{ width: "100%" }}>
      {showScreenContext.showScreen !== "" ? (
        <AllResults />
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <p
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              marginLeft: "9%",
              color: "white",
            }}
          >
            Top Artists
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              width: "calc(100vh - 5%)",
              overflowX: "auto",
            }}
          >
            <TopFollowedArtist />
          </div>
        </div>
      )}

      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        {search.artists?.items.length > 0 &&
          showScreenContext.showScreen === "" && (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: "9%",
                width: "50%",
              }}
            >
              <p
                style={{ fontSize: "22px", fontWeight: "bold", color: "white" }}
              >
                {" "}
                Meilleur résultat{" "}
              </p>
              <BestArtistTrackResult artist={search.artists?.items[0]} />
            </div>
          )}
      </div>
    </div>
  );
};

export default Home;
