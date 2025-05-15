import React, { useState } from "react";
import "./DropdownItem.css";

export interface DropdownItemProps {
  label: string;
  action: () => void;
}

const DropdownItem = ({ label, action }: DropdownItemProps) => {
  const [hovered, setHovered] = useState(false);

  return (
    <li
      className="dropdown-item"
      onClick={action}
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
