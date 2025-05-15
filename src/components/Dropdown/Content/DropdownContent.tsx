import React from "react";
import DropdownItem, { DropdownItemProps } from "../Item/DropdownItem.tsx";
import "./DropdownContent.css";

export interface DropdownContentProps {
  items: DropdownItemProps[];
  open?: boolean;
}

const DropdownContent = ({ items, open = false }: DropdownContentProps) => {
  return (
    <ul className={`dropdown-content ${open ? "content-open" : null}`}>
      {items.map((item) => (
        <DropdownItem label={item.label} action={item.action} />
      ))}
    </ul>
  );
};

export default DropdownContent;
