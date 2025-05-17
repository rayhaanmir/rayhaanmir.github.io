import React from "react";
import DropdownItem, { DropdownItemProps } from "../Item/DropdownItem.tsx";
import "./DropdownContent.css";

export interface DropdownContentProps {
  items: DropdownItemProps[];
  open?: boolean;
}

const DropdownContent = ({ items, open = false }: DropdownContentProps) => {
  return (
    <ul
      className={`dropdown-content ${open ? "content-open" : null}`}
      style={
        open
          ? { maxHeight: `min(.1rem + ${items.length * 2.5}rem, 500px)` }
          : {}
      }
    >
      {items.map((item, index) =>
        index === items.length - 1 ? (
          <DropdownItem
            key={item.label}
            label={item.label}
            action={item.action}
            removeBottom={true}
          />
        ) : (
          <DropdownItem
            key={item.label}
            label={item.label}
            action={item.action}
          />
        )
      )}
    </ul>
  );
};

export default DropdownContent;
