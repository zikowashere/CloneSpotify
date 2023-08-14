import React, { ReactNode } from "react";
import "../assets/style/SideBar.css";

type Props = {
  children: ReactNode;
};

const SideBar = ({ children }: Props) => {
  return (
    <div className="styleSideBar">
      <div>{children}</div>
    </div>
  );
};

export default SideBar;
