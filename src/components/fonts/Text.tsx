import React from "react";
import { text } from "stream/consumers";

interface TextProps {
  children: React.ReactNode;
  size: any;
  color: string;
  center?: boolean;
}

const Text: React.FC<TextProps> = ({ children, size, color, center }) => {
  const style: React.CSSProperties = {
    fontSize: size,
    color: color,
    textAlign: center ? "center" : "left",
  };
  return (
    <p className="text" style={style}>
      {children}
    </p>
  );
};

export default Text;
