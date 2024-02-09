import React from "react";
import { SolidButton } from "../Basic components/Button";
import styled from "styled-components";

const ClockText = styled.h1`
  font-family: Handlee, cursive;
  font-size: 24px;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.8);
`;

const ClockSubText = styled.h2`
  font-family: Handlee, cursive;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 25px;
  font-size: 17px;
  text-align: justify;
  line-height: 27px;
`;

const NormalText = styled.span`
  color: #fff;
  border-bottom: 4px solid #ff105e;
  font-family: Poppins, sans-serif;
  letter-spacing: 0;
`;

const HeroText = () => {
  return (
    <div className="col-12 col-lg-7 col-md-6 col-xl-6 my-auto offset-lg-0 order-2 text-start">
      <ClockText className=" mt-2 mt-sm-0">
        Why neram Classes for <NormalText>NATA Coaching</NormalText> ?
      </ClockText>
      <br></br>
      <ClockSubText>
        We are team of talented practicing architects from IITs &amp; NITs
        started this for betterment of this Architecture profession
      </ClockSubText>
      <div>
        <SolidButton className="rounded-pill">Calculator</SolidButton>
        <SolidButton className="rounded-pill">Webinar</SolidButton>
      </div>
    </div>
  );
};

export default HeroText;
