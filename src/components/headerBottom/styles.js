import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 15px 45px 10px 45px;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: #fff;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
`;

export const Content = styled.nav`
  ul {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`;
