import React from "react";

interface TitleProps {
  children: React.ReactNode;
  size: any;
}

const Title = ({ children, size }: TitleProps) => {
  const style = {
    fontSize: size,
  };
  return (
    <h1 className="title" style={style}>
      {children}
    </h1>
  );
};

export default Title;
