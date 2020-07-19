import React from "react";
import { useHistory } from "react-router-dom";

import { Container } from "./styles";
import Button from "../../components/button";
import TypingIndicator from "../../components/typing-indicator";

function Home() {
  const history = useHistory();

  function redirect(route) {
    history.push(route);
  }

  return (
    <Container>
      <Button title="Entre agora" onClick={() => redirect("/login")} />
      <Button title="Registre-se" onClick={() => redirect("/register")} />
      <TypingIndicator />
    </Container>
  );
}

export default Home;
