import React from "react";
import styled from "styled-components";

const LogoLink = styled.a`
  &.d-lg-inline-block {
    display: none; // Hide by default
  }
  @media (min-width: 992px) {
    &.d-lg-inline-block {
      display: block; // Show on large screens
    }
  }
`;

function NeramLogo() {
  return (
    <LogoLink className="d-lg-inline-block my-auto">
      <img src="images/neram.png" alt=""></img>
    </LogoLink>
  );
}

export default NeramLogo;
