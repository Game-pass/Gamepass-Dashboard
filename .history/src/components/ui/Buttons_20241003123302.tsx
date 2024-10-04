import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ children, onClick, className }) => (
  <button className={`px-4 py-2 rounded bg-da text-white ${className}`} onClick={onClick}>
    {children}
  </button>
);
