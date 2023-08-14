import spotifyPlayer from "../assets/Images/SpotifyPlayButton.png";
import "../assets/style/TrackCard.css";
import { ActionMusic } from "../actions/ActionMusic";
import { track, trackCard } from "../types/track";

type Props = {
  imageArtist?: string;
  artistName?: string;
  title: string;
  uri: string;
  track: trackCard;
};

const TrackCard = ({ title, artistName, track, uri, imageArtist }: Props) => {
  const { playTrack } = ActionMusic();

  const play = () => {
    playTrack(track, 0);
  };

  return (
    <div className="styleRootTrackCard">
      <div className="styleFirstDivTrackCard">
        {uri && <img className="styleImageTrackCard" src={imageArtist} />}

        <p className="styleTitle">{title}</p>

        <p className="styleTrackCard">{artistName}</p>

        <div>
          <button id="playButton" className="stylePlayButton" onClick={play}>
            <img
              style={{
                height: "20px",
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
