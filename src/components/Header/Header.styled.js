import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 96px;

  background: transparent;
  position: relative;
  z-index: 1;
`;

export const Logo = styled.h2`
  color: var(--colors-title);
`;

export const Bar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 92px;
`;
