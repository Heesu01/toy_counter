import React from "react";
import styled from "styled-components";

const Controller = () => {
  return (
    <Div>
      <Button>-1</Button>
      <Button>-10</Button>
      <Button>-100</Button>
      <Button>+100</Button>
      <Button>+10</Button>
      <Button>+1</Button>
    </Div>
  );
};
const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
const Button = styled.button`
  width: 70px;
  height: 27px;
  margin: 5px;
  cursor: pointer;
  &:hover {
    border-radius: 5px;
    background-color: #aaa;
    color: #fff;
  }
`;

export default Controller;
