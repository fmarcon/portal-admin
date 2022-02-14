import React from "react";
import "./Aside.css";
import CaixaMenu from "../CaixaMenu/CaixaMenu";
import TopoEsquerdo from "../TopoEsquerdo/TopoEsquerdo";

function Aside(props) {
  function getMenus() {
    return [{ titulo: "sdf" }, { titulo: "sdf1" }];
    console.log(props)
    return props

  }

  return (
    <aside>
      <TopoEsquerdo></TopoEsquerdo>

      {getMenus().map((obj) => (
        <CaixaMenu titulo={obj.titulo}></CaixaMenu>
      ))}
    </aside>
  );
}

export default Aside;
