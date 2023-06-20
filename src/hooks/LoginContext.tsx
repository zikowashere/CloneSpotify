import React, { Dispatch, ReactNode, SetStateAction, useState } from "react";
type LoginContextType = {
  accessToken: string;
  setAccessToken: Dispatch<SetStateAction<string>>;
};
type Props = {
  children: ReactNode;
};

export const loginContext = React.createContext<LoginContextType>({
  accessToken: "",
  setAccessToken: () => {
    /* */
  },
});

export const LoginProvider = ({ children }: Props) => {
  const [accessToken, setAccessToken] = useState<string>("");

  return (
    <loginContext.Provider value={{ accessToken, setAccessToken }}>
      {children}
    </loginContext.Provider>
  );
};
