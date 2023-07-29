import { useContext } from "react";
import { accessToken } from "../../global";
import { contextApp } from "../hooks/ContextApp";

export const ActionInitializer = () => {
  const contextAll = useContext(contextApp);

  const getUser = () => {
    fetch("https://api.spotify.com/v1/me", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    }).then((response) => {
      response.json().then((data) => contextAll.setUser(data));
    });
  };
  return {
    getUser,
  };
};
