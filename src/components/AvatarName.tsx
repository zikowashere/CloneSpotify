import { avatarName } from "../assets/style/AvatarName";

type Props = {
  name: string;
};

const Avatar = ({ name }: Props) => {
  // Récupérez la première lettre du nom
  const firstLetter = name ? name.charAt(0).toUpperCase() : "";

  return <div style={avatarName}>{firstLetter}</div>;
};

export default Avatar;
