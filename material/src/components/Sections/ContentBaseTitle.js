import React from "react";
import styled from "styled-components";

const Title = styled.p`
  font-weight: ${({ weight }) => weight || 700};
  font-size: ${({ size }) => size || "16px"};
  color: ${({ color }) => color || "#000"};
  font-family: ${({ fontFamily }) => fontFamily || "arial"};
  font-style: ${({ fontStyle }) => fontStyle || "normal"};
  margin: 0;
`;

const ContentBaseTitle = ({ primary, secondary, tertiary }) => {
  return (
    <>
      <Title weight={700} size="23px" color="#88206d" className="mb-2">
        {primary}
      </Title>
      <Title weight={700} size="16px" className="mb-1">
        {secondary}
      </Title>
      <Title color="#6e6e6e" fontFamily="arial" size="14px" fontStyle="italic">
        {tertiary}
      </Title>
    </>
  );
};

export default ContentBaseTitle;
