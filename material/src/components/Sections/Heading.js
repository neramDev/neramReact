import React from "react";
import styled from "styled-components";

const SectionTitleH1 = styled.h1`
  font-size: 23px;
  font-weight: 700;
  color: var(--violet);
`;

const SectionSubTitleH1 = styled.h1`
  font-size: 1rem;
`;

const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="section-title">
      <SectionTitleH1>{title}</SectionTitleH1>
      <SectionSubTitleH1>{subtitle}</SectionSubTitleH1>
    </div>
  );
};

export default SectionTitle;
