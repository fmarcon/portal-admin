import AppRoutes from './AppRoutes';
import AuthContext from "./contexts/AuthContext"
import { useState } from "react";

function App() {

  function criarMenus() {
    return [{ titulo: "Sub01" }, { titulo: "Sub02" }];
  }

  const [email, setEmail] = useState("abc@gmail.br");
 
  return (
    <AuthContext.Provider value={[email, setEmail]}>
      <AppRoutes />
    </AuthContext.Provider>
  );
}

export default App;
