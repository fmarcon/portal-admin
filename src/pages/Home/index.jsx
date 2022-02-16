import React, { useContext } from "react";

import "../../App.css";
import Aside from "../../components/Aside";
import Header from "../../components/Header";
import Main from "../../components/Main";
import Footer from "../../components/Footer";
import { AuthContext } from "../../contexts/auth";

function HomePage() {
  function criarMenus() {
    return [{ titulo: "Sub01" }, { titulo: "Sub02" }];
  }

  const { logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="container">
      <Aside menus={criarMenus}></Aside>
      <Header></Header>
      <Main></Main>
      <button onClick={handleLogout}>Logout</button>
      <Footer></Footer>
    </div>
  );
}

export default HomePage;
