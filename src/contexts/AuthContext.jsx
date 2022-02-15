import React, { useState, createContext } from "react";

export const AuthContext = createContext(0);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (email, password) => {
    console.log(email, " --- ", password);
    setUser({ id: "123", email });
  };

  const logout = () => {
    console.log(logout);
  };

  return (
    <AuthContext.Provider
      value={{ authenticated: !!user, user, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
