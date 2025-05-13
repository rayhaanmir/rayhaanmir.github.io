import React, { useState } from "react";
import "./DropdownItem.css";

export interface DropdownItemProps {
  label: string;
  action: string;
}

const DropdownItem = ({ label, action }: DropdownItemProps) => {
  const [hovered, setHovered] = useState(false);

  return (
    <li
      className="dropdown-item"
      onClick={() => window.open(action, "_blank", "noopener,noreferrer")}
      onMouseEnter={() => {
        setHovered(true);
      }}
      onMouseLeave={() => {
        setHovered(false);
      }}
      style={{ backgroundColor: hovered ? "#7f7f7f" : "transparent" }}
    >
      {label}
    </li>
  );
};

export default DropdownItem;
