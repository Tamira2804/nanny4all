import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 96px;
  color: var(--colors-title-inverse);

  background: ${(props) => props.background || "transparent"};
  position: relative;
  z-index: 1;
`;

export const Logo = styled.h2``;

export const Bar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 92px;
  color: inherit;
`;
