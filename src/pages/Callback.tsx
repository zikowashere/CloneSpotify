import React from "react";
import { useContext, useEffect, useState } from "react";
import { LoginProvider, loginContext } from "../hooks/LoginContext";
import Dashboard from "./Dashboard";
import Login from "./Login";

const Callback = () => {
  const [accessToken, setAccessToken] = useState(
    localStorage.getItem("access_token") || ""
  );

  useEffect(() => {
    console.log("olala", accessToken);
    // Effectuez d'autres actions avec loginContext.accessToken
  }, [accessToken]);
  return <div>{accessToken ? <Dashboard /> : <Login />}</div>;
};

export default Callback;
