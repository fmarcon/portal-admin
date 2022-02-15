import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

import Login from "./pages/Login/Login";
import HomePage from "./pages/Home/Home";
//import App from "./App";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route exact path="/login" element={<Login/>}></Route>
        <Route exact path="/" element={<HomePage/>}></Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
