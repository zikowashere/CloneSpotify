type Props = {
  trackDuration: number;
  currentTime: number;
};
const ProgressBar = ({ trackDuration, currentTime }: Props) => {
  const percentage = (currentTime / trackDuration) * 30;

  return (
    <div
      style={{
        position: "absolute",
        bottom: "10%",
        height: "4%",
        left: "40%",
        backgroundColor: "white",
        width: `${percentage}%`,
        maxWidth: `35%`,
        borderRadius: "20",
      }}
    ></div>
  );
};

export default ProgressBar;
