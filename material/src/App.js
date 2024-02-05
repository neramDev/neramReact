import "./App.css";
import { createGlobalStyle } from "styled-components";
import NeramAppBar from "./components/TopNavigationBar/appbar.js";
import "bootstrap/dist/css/bootstrap.min.css";
import SectionBackground from "./components/Sections/Background.js";

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

// Main app

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <NeramAppBar />
      <>
        <SectionBackground type="grad">
          <h1>Welcome</h1>
        </SectionBackground>
        <SectionBackground type="pink">
          <h1>Welcome</h1>
          <p>This is hero</p>
        </SectionBackground>
        <SectionBackground color="#fff" height="300px">
          <h1>Welcome</h1>
          <p>This is hero</p>
        </SectionBackground>
      </>
    </div>
  );
}

export default App;
