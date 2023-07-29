import React, { useState } from "react";
import Avatar from "./AvatarName";
type Props = {
  userName: string;
};

const Disconnect = ({ userName }: Props) => {
  // Utilisez l'état local pour gérer l'état du menu déroulant (ouvert/fermé)
  const [isMenuOpen, setMenuOpen] = useState(false);

  const DisconnectFromApp = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("code_verifier");
    window.location.href = "http://localhost:5173/";
  };

  // Fonction pour basculer l'état du menu déroulant
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div style={{ marginTop: "2%", marginRight: "3%" }}>
      {/* Bouton stylé pour le menu déroulant */}
      <div>
        <button
          onClick={toggleMenu}
          style={{
            height: "50%",
            display: "flex",
            flexDirection: "row",
            width: "200px",
            backgroundColor: "gray",
            color: "#fff",
            padding: "10px 20px",
            border: "none",
            borderRadius: "40px",
            cursor: "pointer",
          }}
        >
          <Avatar name={userName} />
          <p>{userName}</p>
        </button>
      </div>

      {/* Afficher le contenu du menu déroulant si isMenuOpen est vrai */}
      {isMenuOpen && (
        <div
          style={{
            backgroundColor: "#f1f1f1",
            borderRadius: "4px",
            marginTop: "5px",
          }}
        >
          <ul
            style={{
              listStyle: "none",
              padding: "0",
              margin: "0",
              width: "100%",
            }}
          >
            <li
              onClick={DisconnectFromApp}
              style={{ padding: "10px", cursor: "pointer" }}
            >
              Log out
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Disconnect;
