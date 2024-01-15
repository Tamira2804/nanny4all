import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Nav = styled.nav`
  display: flex;
  gap: 40px;
`;

export const Link = styled(NavLink)`
  font-size: 16px;
  font-weight: var(--fw-regular);
  color: var(--colors-title);

  &:hover,
  &:focus {
    border-bottom: 2px solid var(--accent);
    cursor: pointer;
  }
`;
