import React, { useState } from "react";
import { FaChevronUp } from "react-icons/fa";
import "./DropdownButton.css";

interface DropdownButtonProps {
  text: string;
  setOpen: (value: React.SetStateAction<boolean>) => void;
  open: boolean;
}

const DropdownButton = ({ text, setOpen, open }: DropdownButtonProps) => {
  const [spinning, setSpinning] = useState(false);
  return (
    <div
      className={`dropdown-btn ${open ? "button-open" : null}`}
      onClick={() => setOpen((open) => !open)}
    >
      {text}
      <span className="toggle-icon">
        <FaChevronUp className={`arrow ${open ? "spin" : ""}`} />
      </span>
    </div>
  );
};

export default DropdownButton;
