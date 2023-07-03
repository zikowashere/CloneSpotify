import React from "react";
import { useContext, useEffect, useState } from "react";
import { LoginProvider, loginContext } from "../hooks/ContextApp";
import Dashboard from "./Dashboard";
import Login from "./Login";

const Callback = () => {
  const accessToken = localStorage.getItem("access_token");

  return <div>{accessToken ? <Dashboard /> : <Login />}</div>;
};

export default Callback;
