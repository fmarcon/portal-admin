import React, { useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import HomePage from "./pages/Home";

import { AuthProvider } from "./contexts/AuthContext";

function AppRoutes() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/" element={<HomePage />}></Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default AppRoutes;
