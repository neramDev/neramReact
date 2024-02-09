import React from "react";
import styled from "styled-components";
import {
  SolidButton,
  OutlineButton,
  HighlightButton,
} from "../../Basic components/Button";

const ActionLink = styled.a`
  &.d-lg-inline-block {
    display: none; // Hide by default
  }
  @media (min-width: 992px) {
    &.d-lg-inline-block {
      display: block; // Show on large screens
    }
  }
`;

function ActAppBar() {
  return (
    <ActionLink className="my-auto d-lg-inline-block">
      <OutlineButton className="rounded-pill">Join Class</OutlineButton>
    </ActionLink>
  );
}

export default ActAppBar;
