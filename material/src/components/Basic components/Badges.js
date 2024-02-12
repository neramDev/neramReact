import React from "react";
import styled from "styled-components";

const Badge = styled.div`
  width: ${({ width }) => width || "75px"};
  height: ${({ height }) => height || "75px"};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ color }) => color || "#fffb01"};
  font-weight: 700;
  font-size: ${({ fontSize }) => fontSize || "35px"};
  border-radius: 50%; /* Use border-radius shorthand for circular shape */
  background: #ff105e;
  box-shadow: ${({ shadow }) => shadow || "5px 4px 9px 0px rgba(0, 0, 0, 0.4)"};
`;

const NeramBadges = ({ content }) => {
  return <Badge>{content}</Badge>;
};

export default NeramBadges;
