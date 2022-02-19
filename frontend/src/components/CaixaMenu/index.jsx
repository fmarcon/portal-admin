import React from "react";
import "./style.css";

function CaixaMenu(props) {
  return (
    <div className="caixa grupo-menu">
      <h4>{props.titulo}</h4>
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
