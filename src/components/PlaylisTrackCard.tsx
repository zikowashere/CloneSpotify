import spotifyPlayer from "../assets/SpotifyPlayButton.png";
import { ActionMusic } from "../actions/ActionMusic";

type Props = {
  imageArtist: string;
  artistName?: string;
  title: string;
  uri: string;
  track: object;
};

const PlaylisTrackCard = ({ title, uri, artistName, track }: Props) => {
  console.log(" track is: ", track);

  const { playMusicAlbum } = ActionMusic();
  return (
    <div
      style={{
        height: "4%",
        marginBottom: "50px",
        flexDirection: "row",
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
          src={track.album.images[0].url}
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
              position: "absolute",
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
            onClick={() => playMusicAlbum(track)}
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

export default PlaylisTrackCard;
