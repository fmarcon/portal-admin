import React, { useContext } from "react";

import "../../App.css";
import Aside from "../../components/Aside";
import Header from "../../components/Header";
import Main from "../../components/Main";
import Footer from "../../components/Footer";

function HomePage() {
  function criarMenus() {
    return [{ titulo: "Sub01" }, { titulo: "Sub02" }];
  }

  return (
    <div className="container">
      <Aside menus={criarMenus}></Aside>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}

export default HomePage;
