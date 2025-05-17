import React, { useState } from "react";
import "./DropdownItem.css";

export interface DropdownItemProps {
  label: string;
  action: () => void;
  removeBottom?: boolean;
}

const DropdownItem = ({
  label,
  action,
  removeBottom = false,
}: DropdownItemProps) => {
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
      style={
        removeBottom
          ? {
              backgroundColor: hovered ? "#7f7f7f" : "transparent",
              borderBottom: "0",
            }
          : { backgroundColor: hovered ? "#7f7f7f" : "transparent" }
      }
    >
      {label}
    </li>
  );
};

export default DropdownItem;
