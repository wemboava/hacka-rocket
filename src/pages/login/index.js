import React, { useState } from "react";
import { useAuthContext } from "../../contexts/auth";
import Button from "../../components/button";

import { Container } from "./styles";

function Login() {
  const { login } = useAuthContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin() {
    login(email, password);
  }

  return (
    <Container>
      <Button title="Clique aqui para o login" onClick={handleLogin} />
    </Container>
  );
}

export default Login;
