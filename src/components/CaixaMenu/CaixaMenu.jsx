import React from "react";
import "./CaixaMenu.css";

function CaixaMenu(props) {
  return (
    <div className="caixa grupo-menu">
      <h4>Submenu1</h4>
      <br />
      <ul>
        <li>
          <a href="#df">Fotos</a>
        </li>
        <li>
          <a href="#df">Chat</a>
        </li>
        <li>
          <a href="#df">TODO</a>
        </li>
        <li>
          <a href="#df">Calendário</a>
        </li>
      </ul>
    </div>
  );
}

export default CaixaMenu;
