import React from "react";
import Chat from "../../components/chat";
import Textbar from "../../components/textbar";

import { Container } from "./styles";

function Register() {
  return (
    <Container>
      <Chat />
      <Textbar />
    </Container>
  );
}

export default Register;
