import { useContext } from "react";
import { contextApp } from "../hooks/ContextApp";
import { getUserInfoService } from "../services/InitializerService";

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
