import "../assets/style/AvatarName.css";

type Props = {
  name: string;
};

const Avatar = ({ name }: Props) => {
  // Récupérez la première lettre du nom
  const firstLetter = name ? name.charAt(0).toUpperCase() : "";

  return <div className="avatarName">{firstLetter}</div>;
};

export default Avatar;
