import React from "react";
import styled from "styled-components";
import ContentBaseTitle from "../Sections/ContentBaseTitle";
import NeramBadges from "../Basic components/Badges"; // Import the NeramBadges component

const Container = styled.div`
  position: relative;
`;

const BadgeWrapper = styled.div`
  position: absolute;
  left: 53%;
  top: 65%;
`;

const CircleBackground = styled.img`
  border-radius: 50%;
  position: absolute;
  left: 0;
  right: 0;
  width: 200px; /* Specify width */
  height: 200px; /* Specify height */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const PersonImage = styled.img`
  filter: drop-shadow(12px 12px 15px rgba(0, 0, 0, 0.56));
  position: absolute;
  top: 38%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0.49);
  border-radius: 50rem;
  -webkit-tap-highlight-color: transparent;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    border-radius 250ms cubic-bezier(0.4, 0, 0.2, 1),
    top 250ms cubic-bezier(0.4, 0, 0.2, 1);
  width: 400px;
  cursor: pointer;
  &:hover {
    transform: translate(-50%, -55%) scale(0.55);
    top: 40%;
    border-radius: 1rem;
  }
`;

const ClipContainer = styled.div`
  position: relative;
  height: 18rem;
`;

const ContentCarousel = () => {
  return (
    <>
      <ClipContainer>
        <CircleBackground
          src="images/img/jee-2021/background/chembian-circle.webp"
          alt="NATA topper tamilnadu"
          loading="lazy"
        />
        <PersonImage
          src="images/img/jee-2021/chembian.png"
          alt="NATA Exam 2020 top score"
          loading="lazy"
        />
        <Container>
          <ContentCarousel />
          <BadgeWrapper>
            <NeramBadges content="#2" />{" "}
            {/* Add the NeramBadges component here */}
          </BadgeWrapper>
        </Container>
      </ClipContainer>
      <ContentBaseTitle
        primary={"99.8 Percentile"}
        secondary={"2021 Topper"}
        tertiary={
          <span>
            Sameer <b>(NIT Trichy)</b>
          </span>
        }
      />
    </>
  );
};

export default ContentCarousel;
