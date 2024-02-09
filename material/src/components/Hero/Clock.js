import React, { useState, useEffect } from "react";
import styled from "styled-components";

const ClockContainer = styled.div`
  z-index: 0;
  position: relative;
  width: 300px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(images/clock.png);
  background-size: cover;
  border-radius: 50%;
  box-shadow: 0 -35px +35px rgba(255, 255, 255, 0.15),
    inset 0 -15px +15px rgba(255, 255, 255, 0.15),
    0 35px 35px rgba(0, 0, 0, 0.15), inset 0 15px 15px rgba(0, 0, 0, 0.15);
  &:before {
    content: "";
    position: absolute;
    width: 25px;
    height: 25px;
    background: #fff;
    border-radius: 50%;
    z-index: 960;
  }
  @media (max-width: 992px) {
    position: relative;
    width: 200px;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url(images/clock.png);
    background-size: cover;
    border-radius: 50%;
    box-shadow: 0 -20px +20px rgba(255, 255, 255, 0.15),
      inset 0 -10px +10px rgba(255, 255, 255, 0.15),
      0 20px 20px rgba(0, 0, 0, 0.15), inset 0 10px 10px rgba(0, 0, 0, 0.15);
  }
`;

const Hour = styled.div`
  width: 260px;
  height: 150px;
  position: absolute;
  display: flex;
  justify-content: center;
`;

const Minute = styled.div`
  width: 250px;
  height: 190px;
  position: absolute;
  display: flex;
  justify-content: center;
`;

const Second = styled.div`
  width: 330px;
  height: 205px;
  position: absolute;
  display: flex;
  justify-content: center;
`;

const Hand = styled.div`
  position: absolute;
  border-radius: 50%;
  &:before {
    content: "";
    position: absolute;
    z-index: ${(props) => props.zIndex};
    background: ${(props) => props.color};
    border-radius: ${(props) => props.radius};
    width: ${(props) => props.width};
    height: ${(props) => props.height};
  }
`;

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const deg = 6;
  const hours = time.getHours() * 30;
  const minutes = time.getMinutes() * deg;
  const seconds = time.getSeconds() * deg;

  return (
    <ClockContainer>
      <Hour style={{ transform: `rotateZ(${hours + minutes / 12}deg)` }}>
        <Hand
          color="#ff105e"
          radius="6px 6px 0 0"
          width="12px"
          height="70px"
          zIndex={10}
        />
      </Hour>
      <Minute style={{ transform: `rotateZ(${minutes}deg)` }}>
        <Hand
          color="#fff"
          radius="6px 6px 0 0"
          width="4px"
          height="100px"
          zIndex={11}
        />
      </Minute>
      <Second style={{ transform: `rotateZ(${seconds}deg)` }}>
        <Hand
          color="#fff"
          radius="6px 6px 0 0"
          width="2px"
          height="130px"
          zIndex={12}
        />
      </Second>
    </ClockContainer>
  );
};

export default Clock;
