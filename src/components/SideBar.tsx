import React, { ReactNode } from "react";
import { styleSideBar } from "../assets/style/SideBar";

type Props = {
  children: ReactNode;
};

const SideBar = ({ children }: Props) => {
  return (
    <div style={styleSideBar}>
      <div>{children}</div>
    </div>
  );
};

export default SideBar;
