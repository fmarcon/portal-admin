import React from "react";
import "./Aside.css";
import CaixaMenu from "../CaixaMenu/CaixaMenu";
import TopoEsquerdo from "../TopoEsquerdo/TopoEsquerdo";

function Aside(props) {
  return (
    <aside>

      <TopoEsquerdo></TopoEsquerdo>

      <CaixaMenu></CaixaMenu>
    </aside>
  );
}

export default Aside;
