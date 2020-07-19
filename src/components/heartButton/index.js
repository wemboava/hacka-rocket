import React from "react";
import { Container, Button } from "./styles";

const HeartButton = () => {
  return (
    <Container>
      <Button onClick={() => {}}>
        <input type="checkbox" className="toggle" />
        <div className="heart" />
      </Button>
    </Container>
  );
};
export default HeartButton;
