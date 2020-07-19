import React, { useState } from "react";
import { useAuthContext } from "../../contexts/auth";
import Button from "../../components/button";

import { Container } from "./styles";
import { useHistory } from "react-router-dom";

function Login() {
  const { login } = useAuthContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  function handleLogin() {
    login(email, password);
    history.push("/");
  }

  return (
    <Container>
      <Button title="Clique aqui para o login" onClick={handleLogin} />
    </Container>
  );
}

export default Login;
