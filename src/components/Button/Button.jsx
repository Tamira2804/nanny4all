import React from "react";
import { Btn } from "./Button.styled";

const Button = ({ width, height, text, onClick }) => {
  return (
    <Btn onClick={onClick} width={width} height={height}>
      {text}
    </Btn>
  );
};

export default Button;
