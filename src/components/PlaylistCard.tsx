import { useSearchTrackById } from "../hooks/useSearchTracksByid";

type Props = {
  imagePlaylsit: string;
  title: string;
  link: string;
};

const PlaylistCard = ({ imagePlaylsit, title, link }: Props) => {
  const tracks = useSearchTrackById();

  const getTracksPlayList = async (link: string) => {
    await tracks.getTrackByPlayslist(link);
  };

  return (
    <button
      style={{ backgroundColor: "black", marginBottom: "3%" }}
      onClick={() => getTracksPlayList(link)}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "90%",
          justifyContent: "center",
        }}
      >
        <img
          style={{ height: "100px", marginRight: "2%" }}
          src={imagePlaylsit}
        />
        <p
          style={{
            top: "30%",
            color: "white",
            width: "100%",
          }}
        >
          {title}
        </p>
      </div>
    </button>
  );
};

export default PlaylistCard;
