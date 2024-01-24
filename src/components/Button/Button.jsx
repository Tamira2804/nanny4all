import React from "react";
import { Btn } from "./Button.styled";

const Button = ({
  width,
  height,
  text,
  onClick,
  type = "submit",
  disabled = false,
}) => {
  return (
    <Btn
      type={type}
      onClick={onClick}
      width={width}
      height={height}
      disabled={disabled}
    >
      {text}
    </Btn>
  );
};

export default Button;
