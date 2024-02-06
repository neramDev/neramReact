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
    opacity: 0.7;
  }
  &::before {
    position: absolute;
    display: inline-block;
    top: -180px;
    left: 0;
    width: 30px;
    height: 100%;
    background-color: #fff;
    animation: 3s ease-in-out infinite;
  }
  &:active {
    box-shadow: 4px 4px 6px 0 rgba(255, 255, 255, 0.3),
      -4px -4px 6px 0 rgba(116, 125, 136, 0.2),
      inset -4px -4px 6px 0 rgba(255, 255, 255, 0.2),
      inset 4px 4px 6px 0 rgba(0, 0, 0, 0.2);
  }

  @keyframes shiny-btn1 {
    0% {
      -webkit-transform: scale(0) rotate(45deg);
      opacity: 0;
    }
    80% {
      -webkit-transform: scale(0) rotate(45deg);
      opacity: 0.5;
    }
    81% {
      -webkit-transform: scale(4) rotate(45deg);
      opacity: 1;
    }
    100% {
      -webkit-transform: scale(50) rotate(45deg);
      opacity: 0;
    }
  }
`;

export { SolidButton, OutlineButton, HighlightButton };
