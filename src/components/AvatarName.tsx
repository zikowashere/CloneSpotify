import React from "react";

type Props = {
  name: string;
};

const Avatar = ({ name }: Props) => {
  // Récupérez la première lettre du nom
  const firstLetter = name ? name.charAt(0).toUpperCase() : "";

  return (
    <div
      style={{
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        backgroundColor: "black",
        color: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "20px",
        fontWeight: "bold",
        marginRight: "10%",
        marginTop: "5%",
      }}
    >
      {firstLetter}
    </div>
  );
};

export default Avatar;
