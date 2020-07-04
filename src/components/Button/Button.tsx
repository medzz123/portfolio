import React from "react";

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  variant: "primary" | "secondary";
}

const Button: React.FC<ButtonProps> = (props) => {
  const { children } = props;
  return <button>{children}</button>;
};

export default Button;
