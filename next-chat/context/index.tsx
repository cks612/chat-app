import React, { createContext, ReactNode, useState } from "react";

type ChildrenProps = {
  children: ReactNode;
};

type ContextProps = {
  userName: string;
  setUserName: React.Dispatch<React.SetStateAction<string>>;
  secret: string;
  setSecret: React.Dispatch<React.SetStateAction<string>>;
};

export const Context = createContext({} as ContextProps);

export const ContextProvider = ({ children }: ChildrenProps) => {
  const [userName, setUserName] = useState("");
  const [secret, setSecret] = useState("");

  const value = {
    userName,
    setUserName,
    secret,
    setSecret,
  };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};
