import React from "react";
import "./Login.css";

function Login() {
  return (
    <div id="login">
      <h1>Login do Sistema</h1>

      <form className="form">
        
        <div className="field">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
          <label htmlFor="password">Senha</label>
          <input type="password" name="password" id="password" />
        </div>

        <div className="actions">
          <button type="submit">Entrar</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
