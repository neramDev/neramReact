import React from "react";
import styled from "styled-components";

const Section = styled.section`
  width: 100%;
  height: ${({ height }) => height || "750px"};
  text-align: center;
`;

const GradSection = styled(Section)`
  background-image: linear-gradient(
    111.37738709038058deg,
    #2b2d4e 1.557291666666667%,
    #e1148b 101.34895833333333%
  );
`;

const PinkSection = styled(Section)`
  background-color: var(--light-pink);
`;

const CustomSection = styled(Section)`
  background-color: ${({ color }) => color || "#6c757d"};
`;

const SectionBackground = ({ type, color, height, children }) => {
  switch (type) {
    case "grad":
      return <GradSection height={height}>{children}</GradSection>;
    case "pink":
      return <PinkSection height={height}>{children}</PinkSection>;
    default:
      return (
        <CustomSection color={color} height={height}>
          {children}
        </CustomSection>
      );
  }
};

export default SectionBackground;
