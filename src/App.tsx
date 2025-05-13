import "./App.css";
import github from "./assets/github.png";
import linkedin from "./assets/linkedin.png";
import instagram from "./assets/instagram.png";
import ClickableIcon from "./components/ClickableIcon.tsx";
import Dropdown from "./components/Dropdown/Dropdown.tsx";
import React from "react";

const App = () => {
  const items = [
    ["YouTube", "https://www.youtube.com"],
    ["Wikipedia", "https://www.wikipedia.org"],
  ];
  const website = "rayhaanmir.github.io";
  return (
    <div className="App">
      <header
        className="top-header"
        onClick={() => window.open(website, "_blank", "noopener,noreferrer")}
      >
        {website}
      </header>
      <img className="github-logo" src={github} alt="Github Logo" />
      <header className="title-header">Welcome to my Home Page!</header>
      <Dropdown
        buttonText="Check out these websites"
        content={{
          items: items.map((item) => ({
            label: item[0],
            action: item[1],
          })),
        }}
      />
      <div className="button-row">
        <ClickableIcon
          icon={github}
          link="https://github.com/rayhaanmir"
          scale={85}
        />
        <ClickableIcon
          icon={instagram}
          link="https://www.instagram.com/rayhaan.mir"
          scale={80}
        />
        <ClickableIcon
          icon={linkedin}
          link="https://www.linkedin.com/in/rayhaanmir"
          scale={75}
        />
      </div>
    </div>
  );
};

export default App;
