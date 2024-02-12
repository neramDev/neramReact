import "./App.css";
import styled, { createGlobalStyle } from "styled-components";
import AppBar from "./components/TopNavigationBar/appbar.js";
import "bootstrap/dist/css/bootstrap.min.css";
import SectionBackground from "./components/Sections/Background.js";
import Clock from "./components/Hero/Clock.js";
import HeroText from "./components/Hero/HeroText.js";
import AnimatedWave from "./components/Sections/WaveAnimate.js";
import ResponsiveAppBar from "./components/TopNavigationBar/NavBarBoot.js";
import SectionTitle from "./components/Sections/Heading.js";
import SimpleSlider from "./components/Sections/Caraousel.js";

// Global style

const GlobalStyle = createGlobalStyle`
body {
  background: var(--lightpink);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
html {
  height: 100%;
}
`;

const CenterContainer = styled.div`
  height: 100%;
  display: grid;
  place-items: center;
`;

// Clock Wrapper

const ClockWrapper = styled.div`
  @media (min-width: 768px) {
    .col-md-6 {
      flex: 0 0 50%;
      max-width: 50%;
    }
  }
`;

// Main app

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      {/* <AppBar /> */}
      <ResponsiveAppBar />
      <>
        <SectionBackground type="grad">
          <CenterContainer>
            <div className="d-flex">
              <ClockWrapper className="col-md-6 my-auto col-lg-5 col-xl-4 offset-xl-1 order-1">
                <Clock />
              </ClockWrapper>
              <HeroText />
            </div>
          </CenterContainer>
        </SectionBackground>
        <AnimatedWave />
        <SectionBackground type="pink">
          <SectionTitle
            title="JEE 2021 Toppers"
            subtitle="They Climbed to success & We continue to be Ladders"
          />

          <SimpleSlider />
        </SectionBackground>
        <SectionBackground></SectionBackground>
      </>
    </div>
  );
}

export default App;
