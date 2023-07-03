import React, { Dispatch, ReactNode, SetStateAction, useState } from "react";
type ContextAppType = {
  showScreen: string;
  isClickedShow: boolean;
  setShowScreen: Dispatch<SetStateAction<string>>;
  setIsClicked: Dispatch<SetStateAction<boolean>>;
};
type Props = {
  children: ReactNode;
};

export const contextApp = React.createContext<ContextAppType>({
  showScreen: "",
  isClickedShow: false,
  setShowScreen: () => {
    /* */
  },
  setIsClicked: () => {
    /* */
  },
});

export const ContextAppProvider = ({ children }: Props) => {
  const [showScreen, setShowScreen] = useState<string>("");
  const [isClickedShow, setIsClicked] = useState<boolean>(false);

  return (
    <contextApp.Provider
      value={{ showScreen, setShowScreen, isClickedShow, setIsClicked }}
    >
      {children}
    </contextApp.Provider>
  );
};
