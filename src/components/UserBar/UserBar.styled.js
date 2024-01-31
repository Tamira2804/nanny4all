import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;
`;

export const Typography = styled.p`
  font-size: 18px;
  font-weight: 500;
  line-height: 20px; /* 111.111% */
  letter-spacing: -0.18px;
  color: var(--colors-title-inverse);

  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

export const Svg = styled.svg`
  width: 16px;
  height: 16px;
`;

export const Img = styled.img`
  width: 28px;
  height: 28px;
  border-radius: 20px;
`;

export const AuthBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 14px 39px;
  border-radius: 30px;
  border: 1px solid var(--colors-border);

  font-size: 16px;
  color: inherit;
  background-color: transparent;
  border: 1px solid var(--colors-border);

  gap: 8px;
  transition: transform 200ms linear;

  &:hover,
  &:focus {
    border: 1px solid var(--accent);
    background-color: var(--accent);
    color: var(--colors-title-inverse);
    cursor: pointer;
  }
`;
