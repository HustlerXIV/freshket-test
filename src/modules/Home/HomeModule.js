import React from "react";
import Container from "../../components/Common/Container";
import { styled } from "styled-components";
import Button from "../../components/Common/Button";

const CALCULATOR_PATH = "/calculator";
const RESPONSIVE_CARD_PATH = "/responsive-card";

const HomeModule = () => {
  return (
    <Container center>
      <Box>
        <h3>Napat's Test</h3>
        <ButtonContainer>
          <Button label="Calculator" width={200} href={CALCULATOR_PATH} />
          <Button
            label="Responsive Card"
            width={200}
            href={RESPONSIVE_CARD_PATH}
          />
        </ButtonContainer>
      </Box>
    </Container>
  );
};

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 500px;
  border: 1px solid black;
  border-radius: 16px;
  margin: 0 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 50px;
`;

export default HomeModule;
