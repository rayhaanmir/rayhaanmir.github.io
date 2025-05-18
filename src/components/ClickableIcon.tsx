import { useState } from "react";
import "./ClickableIcon.css";

interface ClickableIconProps {
  icon: string;
  link: string;
  scale?: number; // Percent number
  size?: number; // Pixel height and width
}

const ClickableIcon = ({
  icon,
  link,
  scale = 100,
  size = 60,
}: ClickableIconProps) => {
  const [hovered, setHovered] = useState<boolean>(false);

  return (
    <button
      className="clickable-icon"
      onMouseEnter={() => {
        setHovered(true);
      }}
      onMouseLeave={() => {
        setHovered(false);
      }}
      onClick={() => window.open(link, "_blank", "noopener,noreferrer")}
      style={{
        backgroundImage: `url(${icon})`,
        backgroundColor: hovered ? "#7f7f7f" : "#282c34",
        backgroundSize: `${scale}% ${scale}%`,
        width: `${size}px`,
        height: `${size}px`,
      }}
    />
  );
};

export default ClickableIcon;
