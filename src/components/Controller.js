import React from "react";
import styled from "styled-components";

const Controller = ({ handleSetCount }) => {
  return (
    <Div>
      <Button onClick={() => handleSetCount(-1)}>-1</Button>
      <Button onClick={() => handleSetCount(-10)}>-10</Button>
      <Button onClick={() => handleSetCount(-100)}>-100</Button>
      <Button onClick={() => handleSetCount(+100)}>+100</Button>
      <Button onClick={() => handleSetCount(+10)}>+10</Button>
      <Button onClick={() => handleSetCount(+1)}>+1</Button>
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
