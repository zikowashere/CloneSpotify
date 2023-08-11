import { useContext } from "react";
import { accessToken } from "../../global";
import { contextApp } from "../hooks/ContextApp";
import axios from "axios";
import { getUserInfoService } from "../services/Initializer";

export const ActionInitializer = () => {
  const contextAll = useContext(contextApp);

  const getUser = () => {
    getUserInfoService()
      .getUserInfo()
      .then((response) => {
        contextAll.setUser(response.data);
      });
  };
  return {
    getUser,
  };
};
