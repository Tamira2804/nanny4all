import React from "react";
import { Btn } from "./Button.styled";

const Button = ({
  width,
  height,
  text,
  onClick,
  type = "submit",
  alignSelf,
}) => {
  return (
    <Btn
      type={type}
      onClick={onClick}
      width={width}
      height={height}
      alignSelf={alignSelf}
    >
      {text}
    </Btn>
  );
};

export default Button;
