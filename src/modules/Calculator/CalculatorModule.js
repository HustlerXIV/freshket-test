import React, { useState } from "react";
import Item from "../../components/Item/Item";
import Container from "../../components/Common/Container";
import { styled } from "styled-components";
import Member from "../../components/Item/Member";
import { postData } from "../../utils/apiData";

const colors = [
  {
    color: "Red",
    price: 50,
  },
  {
    color: "Green",
    price: 40,
  },
  {
    color: "Blue",
    price: 30,
  },
  {
    color: "Yellow",
    price: 50,
  },
  {
    color: "Pink",
    price: 80,
  },
  {
    color: "Purple",
    price: 90,
  },
  {
    color: "Orange",
    price: 120,
  },
];

const CalculatorModule = () => {
  const [quantities, setQuantities] = useState([]);
  const [total, setTotal] = useState(0);
  const [isMember, setIsMember] = useState(false);
  const handleOnChange = (color, quantity) => {
    if (quantity === 0) {
      setQuantities((prevQuantities) =>
        prevQuantities.filter((item) => item.color !== color)
      );
    } else {
      const existingIndex = quantities.findIndex(
        (item) => item.color === color
      );

      if (existingIndex !== -1) {
        setQuantities((prevQuantities) => [
          ...prevQuantities.slice(0, existingIndex),
          { ...prevQuantities[existingIndex], quantity },
          ...prevQuantities.slice(existingIndex + 1),
        ]);
      } else {
        setQuantities((prevQuantities) => [
          ...prevQuantities,
          {
            color,
            price: colors.find((c) => c.color === color).price,
            quantity,
          },
        ]);
      }
    }
  };

  const handleOnClick = async () => {
    const data = {
      quantities,
      isMember,
    };
    try {
      const totalPrice = await postData("market/calculatePrice", data);
      setTotal(totalPrice);
    } catch (error) {
      console.error("Error calculating price:", error);
    }
  };

  return (
    <Container center>
      <ItemContainer>
        {colors.map(({ color }, index) => (
          <Item
            key={index}
            bgColor={color}
            onChange={(quantity) => handleOnChange(color, quantity)}
          />
        ))}
        <Member onChange={setIsMember} />
        <TotalContainer>
          Total:
          <b>{total}</b>
          <button onClick={handleOnClick}>Calculate</button>
        </TotalContainer>
      </ItemContainer>
    </Container>
  );
};

const TotalContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export default CalculatorModule;
