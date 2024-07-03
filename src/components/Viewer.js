import React from "react";
import styled from "styled-components";

const Viewer = () => {
  return (
    <div>
      <div>현재카운트: </div>
      <H1>0</H1>
    </div>
  );
};
const H1 = styled.h1`
  text-align: center;
`;
export default Viewer;
