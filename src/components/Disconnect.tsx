import React, { useState } from "react";
import Avatar from "./AvatarName";
import {
  styleDisconnect,
  styleDivToogleMenu,
  styleUlToogleMenu,
} from "../assets/style/Disconnect";
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
        <button id="disconnect" onClick={toggleMenu} style={styleDisconnect}>
          <Avatar name={userName} />
          <p>{userName}</p>
        </button>
      </div>

      {/* Afficher le contenu du menu déroulant si isMenuOpen est vrai */}
      {isMenuOpen && (
        <div style={styleDivToogleMenu}>
          <ul style={styleUlToogleMenu}>
            <li
              id="log out"
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
