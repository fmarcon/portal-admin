import React, { useContext, useState } from "react";
import "./Login.css";

import {AuthContext} from "../../contexts/auth";

function Login() {
  
  const {authenticated, login, user} = useContext(AuthContext);
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleChangeEmail = function(e) {
    setEmail(e.target.value)
  };

  const handleChangePassword = function(e) {
    setPassword(e.target.value)
  };

  const handleSubmit = function(e){
    e.preventDefault();
    login(email, password)
  }

  return (
    <div id="login">
      <h1>Login do Sistema</h1>
      <h2>Autenticado: {String(authenticated)}</h2>
      <form className="form" onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" value={email} id="email" onChange={handleChangeEmail}/>
          <label htmlFor="password">Senha</label>
          <input type="password" name="password" id="password" onChange={handleChangePassword}/>
        </div>
        <div className="actions">
          <button type="submit">Entrar</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
