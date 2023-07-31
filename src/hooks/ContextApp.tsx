/* eslint-disable react-refresh/only-export-components */
import React, { Dispatch, ReactNode, SetStateAction, useState } from "react";
import { user } from "../types/user";
type ContextAppType = {
  showScreen: string;
  isClickedShow: boolean;
  user: user;
  setShowScreen: Dispatch<SetStateAction<string>>;
  setIsClicked: Dispatch<SetStateAction<boolean>>;
  setUser: Dispatch<SetStateAction<user>>;
};
type Props = {
  children: ReactNode;
};

export const contextApp = React.createContext<ContextAppType>({
  showScreen: "",
  isClickedShow: false,
  user: { display_name: "" },
  setShowScreen: () => {
    /* */
  },
  setIsClicked: () => {
    /* */
  },
  setUser: () => {
    /* */
  },
});

export const ContextAppProvider = ({ children }: Props) => {
  const [showScreen, setShowScreen] = useState<string>("");
  const [isClickedShow, setIsClicked] = useState<boolean>(false);
  const [user, setUser] = useState<user>({ display_name: "" });

  return (
    <contextApp.Provider
      value={{
        showScreen,
        setShowScreen,
        user,
        isClickedShow,
        setIsClicked,
        setUser,
      }}
    >
      {children}
    </contextApp.Provider>
  );
};
