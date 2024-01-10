import React from "react";
import { styled } from "styled-components";

const Loader = () => {
  return <Overlay>Loading...</Overlay>;
};

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100dvw;
  height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: black;
  color: white;
  opacity: 70%;
  z-index: 1000;
`;

export default Loader;
