import React from "react";
import { styled } from "styled-components";

const Card = ({ name, desc, img, tags }) => {
  return (
    <CardContainer>
      <CardImageContainer>
        <CardImage src={img} />
        <CardName>{name}</CardName>
      </CardImageContainer>
      <CardDesc>{desc}</CardDesc>
      <TagContainer>
        {tags.map((tag) => (
          <Tag key={tag.id}>{tag.name}</Tag>
        ))}
      </TagContainer>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  background: white;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 16px;
  width: 100%;
  max-width: 240px;
  height: 420px;
  padding: 20px;

  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const CardImageContainer = styled.div`
  position: relative;
`;

const CardImage = styled.img`
  width: 100%;
  border-radius: 16px;
`;

const CardName = styled.div`
  background: #182200;
  position: absolute;
  bottom: -40px;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 180px;
  height: 50px;
  font-weight: bold;
`;

const CardDesc = styled.div`
  text-align: center;
`;

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const Tag = styled.div`
  background: #a6d33c;
  border-radius: 56px;
  color: white;
  font-size: 12px;
  padding: 5px 20px;
`;

export default Card;
