import React, { useState, useContext } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import HomePage from "./pages/Home";
import PerfilPage from "./pages/Perfil"

import { AuthProvider, AuthContext } from "./contexts/auth";

function AppRoutes() {
  const Private = ({ children }) => {
    const { authenticated } = useContext(AuthContext);
    if (!authenticated) {
      return <Navigate to="/login"></Navigate>;
    }

    return children;
  };

  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route exact path="/login" element={<Login />}></Route>
          <Route
            exact
            path="/perfil"
            element={
              <Private>
                <PerfilPage />
              </Private>
            }
          ></Route>
          <Route
            exact
            path="/"
            element={
              <Private>
                <HomePage />
              </Private>
            }
          ></Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default AppRoutes;
