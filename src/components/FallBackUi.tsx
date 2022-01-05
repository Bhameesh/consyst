import React from "react";
import styled from "styled-components";

export const ErrorBoundaryWrapper = styled.div`
  background-color: #fff;
  position: absolute;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  color: #000000;
  justify-content: center;
`;

const FallBackUi = () => {
  return <ErrorBoundaryWrapper>Something Went Wrong</ErrorBoundaryWrapper>;
};

export default FallBackUi;
