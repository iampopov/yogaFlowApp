import React from "react";
import "../../../styles/ListStyles.css";

// This file exports both the List and ListItem components

export function List({ children }) {
  return (
    <div className="list-overflow-container">
      <div className="list-group">{children}</div>
    </div>
  );
}

export function ListItem({ children }) {
  return <span className="list-group-item">{children}</span>;
}
