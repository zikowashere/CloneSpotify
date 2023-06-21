import spotifyPlayer from "../assets/Images/SpotifyPlayButton.png";
import { ActionMusic } from "../actions/ActionMusic";
import { useContext } from "react";
import { TrackContext } from "../hooks/SearchTracksByArtistContext";
import { contextMusic } from "../hooks/MusicPlayContext";

type Props = {
  imageArtist: string;
  artistName?: string;
  image: string;
  title: string;
  uri: string;
  track: object;
};

const TrackCard = ({ title, artistName, track, image }: Props) => {
  const { showPlayslist } = useContext(TrackContext);
  const { elapsedMs } = useContext(contextMusic);

  const { playTrack } = ActionMusic();
  const play = () => {
    playTrack(track);
  };
  return (
    <div
      style={{
        height: "4%",
        marginBottom: "50px",
        flexDirection: "row",
        width: "70%",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flex: 1,
        }}
      >
        <img
          style={{ height: "100%", width: "15%", marginRight: "5%" }}
          src={image}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            position: "relative",
            flex: 1,
          }}
        >
          <p
            style={{
              marginLeft: "2%",
              color: "white",
              fontSize: "12px",
              fontWeight: "bold",
              bottom: "10px",
            }}
          >
            {title}
          </p>
          <p
            style={{
              position: "absolute",
              fontSize: "13px",
              color: "white",
              bottom: "-10px",
            }}
          >
            {artistName}
          </p>
        </div>
        <div>
          <button
            style={{
              backgroundColor: "black",
              cursor: "pointer",
              border: "none",
            }}
            onClick={play}
          >
            <img
              style={{
                height: "20px",
                marginRight: "2%",
                marginTop: "7%",
              }}
              src={spotifyPlayer}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrackCard;
