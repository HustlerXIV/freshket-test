import React from "react";
import Button from "./Button";
import { styled } from "styled-components";

const HomeButton = () => {
  return (
    <ButtonContainer>
      <Button label="HOME" width={100} href="/" />
    </ButtonContainer>
  );
};

const ButtonContainer = styled.div`
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 999;
`;

export default HomeButton;
