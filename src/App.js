import "./App.css";
import github from "./assets/github.png";
import linkedin from "./assets/linkedin.png";
import instagram from "./assets/instagram.png";
import ClickableIcon from "./ClickableIcon.tsx";

const App = () => {
  return (
    <div className="App">
      <header className="top-header">rayhaanmir.github.io</header>
      <img className="github-logo" src={github} alt="Github Logo" />
      <header className="title-header">Welcome to my Home Page!</header>
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
