import React from "react";

import "../../App.css";
import Aside from "../Aside/Aside";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

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
