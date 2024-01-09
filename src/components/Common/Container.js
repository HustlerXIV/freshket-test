import React from "react";
import styled from "styled-components";

const Container = ({
  children,
  center = false,
  maxWidth = 1200,
  margin = "0 auto",
}) => {
  return (
    <StyledContainer maxWidth={maxWidth} margin={margin} center={center}>
      {children}
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  width: 100%;
  max-width: ${({ maxWidth }) => `${maxWidth}px`};
  min-height: 100dvh;
  margin: ${({ margin }) => margin};
  display: ${({ center }) => (center ? "flex" : "block")};
  justify-content: ${({ center }) => (center ? "center" : "initial")};
  align-items: ${({ center }) => (center ? "center" : "initial")};
`;

export default Container;
