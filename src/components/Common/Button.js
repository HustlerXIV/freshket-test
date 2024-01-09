import React from "react";
import { styled } from "styled-components";

const Button = ({ label, width, href }) => {
  return (
    <a href={href}>
      <StyledButton width={width}>{label}</StyledButton>
    </a>
  );
};

const StyledButton = styled.button`
  max-height: 80px;
  padding: 10px 22px;
  background-color: #27ae60;
  border-radius: 8px;
  border-style: none;
  box-shadow: rgba(39, 174, 96, 0.15) 0 4px 9px;
  color: #fff;
  display: inline-block;
  font-size: 16px;
  font-weight: 600;
  outline: none;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  width: ${({ width }) => `${width}px`};
`;

export default Button;
