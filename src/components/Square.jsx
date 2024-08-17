import { useState } from "react";

export const Square = ({ children, isSelected, index, updateBoard }) => {
    const className = `${isSelected ? 'is-selected' : ''}`;
    const handleClick = () => {
      updateBoard(index);
    };
  
    return (
      <div onClick={handleClick} className={`square ${className}`}>
        {children}
      </div>
    );
  };