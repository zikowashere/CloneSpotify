import { useContext } from "react";
import { accessToken } from "../../global";
import { contextApp } from "../hooks/ContextApp";
import axios from "axios";

export const ActionInitializer = () => {
  const contextAll = useContext(contextApp);

  const getUser = () => {
    axios
      .get("https://api.spotify.com/v1/me", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) => {
        contextAll.setUser(response.data);
      });
  };
  return {
    getUser,
  };
};
