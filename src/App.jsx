import AppRoutes from './AppRoutes';
import Context from "./Context";
import { useState } from "react";

function App() {

  function criarMenus() {
    return [{ titulo: "Sub01" }, { titulo: "Sub02" }];
  }

  const [email, setEmail] = useState("abc@gmail.br");
 
  return (
    <Context.Provider value={[email, setEmail]}>
      <AppRoutes />
    </Context.Provider>
  );
}

export default App;
