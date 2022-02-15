import React, {useContext} from "react";
import "./Header.css";

import Context from "../../Context";

function Header(props) {
  const [email, setEmail] = useContext(Context);

  return (
    <header>
      Usuário: {email}
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
