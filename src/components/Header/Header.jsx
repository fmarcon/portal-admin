import React from "react";
import "./Header.css";

function Header(props) {
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
