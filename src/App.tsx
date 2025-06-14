import "./App.css";
import github from "./assets/github.png";
import linkedin from "./assets/linkedin.png";
import instagram from "./assets/instagram.png";
import ClickableIcon from "./components/ClickableIcon.tsx";
import Dropdown from "./components/Dropdown/Dropdown.tsx";
import type { DropdownItemProps } from "./components/Dropdown/Item/DropdownItem.tsx";

const App = () => {
  const items: DropdownItemProps[] = [
    {
      label: "YouTube",
      action: () =>
        window.open("https://www.youtube.com", "_blank", "noopener,noreferrer"),
    },
    {
      label: "Wikipedia",
      action: () =>
        window.open(
          "https://www.wikipedia.org",
          "_blank",
          "noopener,noreferrer"
        ),
    },
    {
      label: "My tag cloud generator",
      action: () => (window.location.href = "/tag-cloud-generator"),
    },
  ];
  const website = "rayhaanmir.github.io";
  return (
    <>
      <header className="top-header">
        <p
          className="top-header-text"
          onClick={() =>
            window.open("rayhaanmir.github.io", "_blank", "noopener,noreferrer")
          }
        >
          {website}
        </p>
      </header>
      <img className="github-logo" src={github} alt="Github Logo" />
      <header className="title-header">Welcome to my Home Page!</header>
      <div className="dropdown">
        <Dropdown buttonText="Check out these websites" content={{ items }} />
      </div>
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
    </>
  );
};

export default App;
