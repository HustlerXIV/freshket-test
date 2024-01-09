import React from "react";
import { styled } from "styled-components";

const Item = ({ bgColor, onChange }) => {
  const handleInputChange = (event) => {
    const inputValue = Math.max(0, event.target.value);
    onChange(inputValue);
  };

  return (
    <ItemContainer>
      <ItemColor bgColor={bgColor} />
      <Field type="number" onChange={handleInputChange} />
      Sets
    </ItemContainer>
  );
};

const ItemColor = styled.div`
  width: 30px;
  height: 30px;
  background: ${({ bgColor }) => bgColor};
`;

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 10px;
  border: 1px solid black;
`;

const Field = styled.input`
  text-align: center;
`;

export default Item;
