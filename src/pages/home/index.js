import React from "react";
import { useHistory } from "react-router-dom";

import { Container } from "./styles";
import Button from "../../components/button";

function Home() {
  const history = useHistory();

  function redirect(route) {
    history.push(route);
  }

  return (
    <Container>
      <Button title="Entre agora" onClick={() => redirect("/login")} />
      <Button title="Registre-se" onClick={() => redirect("/register")} />
    </Container>
  );
}

export default Home;
