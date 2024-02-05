import styled, { css } from "styled-components";

const ButtonStyle = css`
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: 13px;
  letter-spacing: 1px;
  display: inline-block;
  padding: 10px 20px;
  transition: 0.5s;
  font-weight: 600;
  white-space: nowrap;
  cursor: pointer;
  transition: all 0.3s ease;
`;

const SolidButton = styled.button`
  ${ButtonStyle}
  background-color: var(--pink);
  color: #fff;

  &:hover {
    background-color: #fff;
    color: var(--pink);
  }
`;

const OutlineButton = styled.button`
  ${ButtonStyle}
  background-color: transparent;
  color: #fff;
  border: 2px solid #fff;

  &:hover {
    background-color: #fff;
    color: var(--pink);
  }
`;

const HighlightButton = styled.button`
  ${ButtonStyle}
  border: none;
  background: rgb(251, 33, 117);
  background: linear-gradient(
    0deg,
    rgba(251, 33, 117, 1) 0%,
    rgba(234, 76, 137, 1) 100%
  );
  color: #fff;
  overflow: hidden;
  &:hover {
    text-decoration: none;
    color: #fff;
  }
  &::before {
    position: absolute;
    display: inline-block;
    top: -180px;
    left: 0;
    width: 30px;
    height: 100%;
    background-color: #fff;
    animation: shiny;
  }
`;

export { SolidButton, OutlineButton, HighlightButton };
