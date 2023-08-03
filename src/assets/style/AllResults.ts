import { CSSProperties } from "react";

export const styleRootFirstDiv: CSSProperties = {
  display: "flex",
  justifyItems: "center",
  height: "calc(100vh - 5%)",
  overflowY: "auto",
  width: "100%",
  marginLeft: "10%",
};
export const styleGridOne: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr ",
  gridGap: "5%",
};
export const styleGridTwo: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "0.5fr 0.5fr 0.5fr ",
  gridGap: "1%",
};
export const styleGridThree: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr ",
  gridGap: "15%",
};
export const styleFirstDiv: CSSProperties = {
  display: "flex",
  flexDirection: "column",
};
