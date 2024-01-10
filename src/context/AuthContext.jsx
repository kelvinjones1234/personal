import React, { createContext } from "react";

export const Data = createContext();

const Context = ({ children }) => {
  const email = "Email";
  return <Data.Provider value={email}>{children}</Data.Provider>;
};

export default Context;
