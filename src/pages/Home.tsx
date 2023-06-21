import { useContext, useEffect } from "react";
import { SearchContext } from "../hooks/SearchContext";
import { useSearch } from "../hooks/useSearch";
import TopFollowedArtist from "../components/TopFollowedArtist";
import { contextMusic } from "../hooks/MusicPlayContext";
import BestResult from "../components/BestResult";

const Home = () => {
  const search = useContext(SearchContext);
  const searchPlaylist = useSearch();
  const musicContext = useContext(contextMusic);
  const result = search.search;

  useEffect(() => {
    searchPlaylist.getPlayListUser();
  }, [musicContext.isPlaying]);

  return (
    <div>
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

      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        {result.length > 0 && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "9%",
            }}
          >
            <p style={{ fontSize: "22px", fontWeight: "bold", color: "white" }}>
              {" "}
              Meilleur résultat{" "}
            </p>
            <BestResult artist={result[0]} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
