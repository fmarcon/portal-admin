import React, {useContext} from "react";
import "./Header.css";

import AuthContext from "../../contexts/AuthContext";

function Header(props) {
  //const [email, setEmail] = useContext(AuthContext);

  return (
    <header>
      <div className="header-perfil caixa">
        <img
          className="item-espaco"
          src="https://img.icons8.com/material-outlined/24/ffffff/positive-dynamic.png"
        />
        <img
          className="item-espaco"
          src="https://img.icons8.com/material-outlined/24/ffffff/positive-dynamic.png"
        />
        <img
          className="item-espaco"
          src="https://img.icons8.com/material-outlined/24/ffffff/positive-dynamic.png"
        />
        <img className="perfil" src="/img/perfil.jpg" alt="" />
      </div>
    </header>
  );
}

export default Header;
