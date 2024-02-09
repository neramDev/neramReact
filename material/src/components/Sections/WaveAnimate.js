import React from "react";
import styled, { keyframes } from "styled-components";

const HeroWavesSvg = styled.svg`
  display: block;
  width: 100%;
  height: 60px;
  position: relative;
  bottom: 60px;
`;

const moveForever = keyframes`
  0% {
    transform: translate3d(-90px, 0, 0);
  }
  100% {
    transform: translate3d(85px, 0, 0);
  }
`;

const WaveGroup = styled.g`
  use {
    animation: ${moveForever} 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
  }

  use:nth-child(1) {
    animation-delay: -2s;
    animation-duration: 7s;
  }

  use:nth-child(2) {
    animation-delay: -3s;
    animation-duration: 10s;
  }

  use:nth-child(3) {
    animation-delay: -4s;
    animation-duration: 13s;
  }

  use:nth-child(4) {
    animation-delay: -5s;
    animation-duration: 20s;
  }
`;

const WavePath = styled.path`
  fill: ${(props) => props.fill};
`;

const AnimatedWave = () => {
  return (
    <HeroWavesSvg
      viewBox="0 24 150 28 "
      className="hero-waves"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <defs>
        <WavePath
          id="wave-path"
          d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
        />
      </defs>
      <WaveGroup className="wave1">
        <use
          fill="rgba(255,255,255, .1)"
          x="50"
          xlinkHref="#wave-path"
          y="1"
        ></use>
      </WaveGroup>
      <WaveGroup className="wave2">
        <use
          fill="rgba(255,255,255, .2)"
          x="50"
          xlinkHref="#wave-path"
          y="-2"
        ></use>
      </WaveGroup>
      <WaveGroup className="wave3">
        <use fill="#fdeffd" x="50" xlinkHref="#wave-path" y="7"></use>
      </WaveGroup>
    </HeroWavesSvg>
  );
};

export default AnimatedWave;
