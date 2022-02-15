import React from "react";
import "./Aside.css";
import CaixaMenu from "../CaixaMenu";
import TopoEsquerdo from "../TopoEsquerdo";

function Aside(props) {
  function getMenus() {
    return [
      { id: 1, titulo: "sdf" },
      { id: 2, titulo: "sdf1" },
    ];
    console.log(props);
    return props;
  }

  return (
    <aside>
      <TopoEsquerdo></TopoEsquerdo>

      {getMenus().map((obj) => (
        <CaixaMenu key={obj.id} titulo={obj.titulo}></CaixaMenu>
      ))}
    </aside>
  );
}

export default Aside;
