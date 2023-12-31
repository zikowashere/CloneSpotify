import React from "react";
import Dashboard from "./Dashboard";
import Login from "./Login";

const Callback = () => {
  const accessToken = localStorage.getItem("access_token");

  return <div>{accessToken ? <Dashboard /> : <Login />}</div>;
};

export default Callback;
