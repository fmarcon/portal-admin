import React, {useContext} from "react";

import "../../App.css";
import Aside from "../../components/Aside/Aside";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import Footer from "../../components/Footer/Footer";
import AuthContext from "../../contexts/AuthContext";

function HomePage() {

  //const [email, setEmail] = useContext(AuthContext);

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
