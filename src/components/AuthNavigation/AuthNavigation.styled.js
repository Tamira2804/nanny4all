import { styled } from "styled-components";
import { Link } from "react-router-dom";

export const AuthBtn = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 14px 39px;
  border-radius: 30px;
  border: 1px solid var(--colors-border);

  font-size: 16px;
  color: var(--colors-title);
  background-color: transparent;

  gap: 8px;
  transition: transform 200ms linear;

  &:hover,
  &:focus {
    border: 1px solid var(--accent);
    background-color: var(--accent);
    cursor: pointer;
  }
`;
