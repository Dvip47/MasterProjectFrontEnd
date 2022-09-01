import React, { createContext, useState } from "react";
export const AuthContext = createContext({});
const Auth = ({ children }) => {
  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};

export default Auth;
