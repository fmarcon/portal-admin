import React, { useContext } from "react";
import "./Login.css";

import Context from "../../Context";

function Login() {
  const [email, setEmail] = useContext(Context);

  const handleChangeEmail = function(e) {
    console.log(e.target.value);
    setEmail(e.target.value);
  };

  const handleSubmit = function(e){
    e.preventDefault();
    console.log(123, email)
  }

  return (
    <div id="login">
      <h1>Login do Sistema - {email}</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" value={email} id="email" onChange={handleChangeEmail}/>
          <label htmlFor="password">Senha</label>
          <input type="password" name="password" id="password"/>
        </div>
        <div className="actions">
          <button type="submit">Entrar</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
