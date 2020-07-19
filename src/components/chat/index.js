import React from "react";

import { Container, MessageBubble, Avatar, BubbleContainer } from "./styles";

const Bubble = ({ yourself, children }) => {
  return (
    <BubbleContainer>
      {!yourself ? <Avatar /> : null}
      <MessageBubble yourself={yourself}>{children}</MessageBubble>
    </BubbleContainer>
  );
};

function Chat() {
  return (
    <Container>
      <Bubble>
        <p className="message">
          Obrigado por escolher se cadastrar na Vitrine!
        </p>
      </Bubble>
      <Bubble>
        <p className="message">
          Faltam poucos passos para se cadastrar na nossa loja, vou te guiar
          durante o processo.
        </p>
      </Bubble>
      <Bubble>
        <p className="message">Qual o seu nome?</p>
      </Bubble>
      <Bubble yourself>
        <p className="message">Matheus</p>
      </Bubble>
      <Bubble yourself>
        <p className="message">Matheus</p>
      </Bubble>
      <Bubble yourself>
        <p className="message">Matheus</p>
      </Bubble>
      <Bubble yourself>
        <p className="message">Matheus</p>
      </Bubble>
      <Bubble yourself>
        <p className="message">Matheus</p>
      </Bubble>
      <Bubble yourself>
        <p className="message">Matheus</p>
      </Bubble>
      <Bubble yourself>
        <p className="message">Matheus</p>
      </Bubble>
    </Container>
  );
}

export default Chat;
