import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  className: string;
  disabled?: boolean;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  onClick,
  ...props
}) => {
  return (
    <button {...props} className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
