import { useState } from "react";

export const accessToken = localStorage.getItem("access_token");
export const redirectUri = window.location.origin + "/callback/";
export const redirectAfterAuthtentication = window.location.origin;

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
