import React from "react";
import { useState } from "react";

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
  const [hovered, setHovered] = useState(false);

  return (
    <button
      onMouseEnter={() => {
        setHovered(true);
      }}
      onMouseLeave={() => {
        setHovered(false);
      }}
      onClick={() => window.open(link, "_blank", "noopener,noreferrer")}
      style={{
        backgroundImage: `url(${icon})`,
        backgroundColor: hovered ? "#7f7f7f" : "transparent",
        backgroundSize: `${scale}% ${scale}%`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        borderRadius: "5px",
        borderWidth: "2px",
        borderColor: "#aaaaaa",
        width: `${size}px`,
        height: `${size}px`,
        transition: "background-color 0.2s ease",
      }}
    />
  );
};

export default ClickableIcon;
