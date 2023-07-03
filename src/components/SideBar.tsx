import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const SideBar = ({ children }: Props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        top: "10%",
        width: "100%",
      }}
    >
      <div>{children}</div>
    </div>
  );
};

export default SideBar;
