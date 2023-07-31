import { useState } from "react";

export const accessToken = localStorage.getItem("access_token");
let redirectUri: string;
let redirectAfterAuthtentication: string;
// Vérifie si vous êtes dans un environnement de navigateur (client-side)
if (typeof window !== "undefined") {
  redirectUri = window.location.origin;
  redirectAfterAuthtentication = window.location.origin;
} else {
  // Si vous êtes dans un environnement de serveur (server-side), définissez une valeur par défaut pour redirectUri
  redirectUri = "https://spootiffy.netlify.app/";
  redirectAfterAuthtentication = "https://spootiffy.netlify.app/";
}
export { redirectUri, redirectAfterAuthtentication };

export const useCodeVerifer = () => {
  const [codeVerifer, setCodeVerifer] = useState<string>("");
  return { codeVerifer, setCodeVerifer };
};
export function formatTime(milliseconds: number) {
  const totalSeconds = Math.floor(milliseconds / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}
