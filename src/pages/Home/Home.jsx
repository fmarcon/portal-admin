import React, {useContext} from "react";

import "../../App.css";
import Aside from "../../components/Aside/Aside";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import Footer from "../../components/Footer/Footer";
import Context from "../../Context";

function HomePage() {

  const [email, setEmail] = useContext(Context);

  function criarMenus() {
    return [{ titulo: "Sub01" }, { titulo: "Sub02" }];
  }

  return (
    <div className="container">
      <h1>Usuário: {email} </h1>
      <Aside menus={criarMenus}></Aside>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}

export default HomePage;
