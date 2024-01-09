import React from "react";
import { styled } from "styled-components";

const Member = ({ onChange }) => {
  return (
    <InputContiner>
      <input type="checkbox" onChange={(e) => onChange(e.target.checked)} />
      Do you have a membership?
    </InputContiner>
  );
};

const InputContiner = styled.div`
  display: flex;
  gap: 10px;
`;

export default Member;
