/* eslint-disable react-refresh/only-export-components */
import React, { Dispatch, ReactNode, SetStateAction, useState } from "react";
type ContextAppType = {
  showScreen: string;
  isClickedShow: boolean;
  user: object;
  setShowScreen: Dispatch<SetStateAction<string>>;
  setIsClicked: Dispatch<SetStateAction<boolean>>;
  setUser: Dispatch<SetStateAction<object>>;
};
type Props = {
  children: ReactNode;
};

export const contextApp = React.createContext<ContextAppType>({
  showScreen: "",
  isClickedShow: false,
  user: {},
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
  const [user, setUser] = useState<object>({});

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
