import React from "react";
import { Container, Content } from "./styles";

const Input = ({
  hangleChange,
  label,
  value,
  name,
  type = "text",
  placeholder,
  isGroup,
}) => {
  return (
    <Container isGroup={isGroup}>
      <Content>
        <label>{label}</label>
        <input
          value={value}
          name={name}
          type={type}
          placeholder={placeholder}
          onChange={hangleChange}
        />
      </Content>
    </Container>
  );
};
export default Input;
