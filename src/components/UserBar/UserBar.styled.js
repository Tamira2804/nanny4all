import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 14px;

  font-size: 18px;
  font-weight: 500;
  line-height: 20px; /* 111.111% */
  letter-spacing: -0.18px;
  color: inherit;
`;
export const Avatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background-color: var(--colors-title-inverse);
`;

export const Svg = styled.svg`
  width: 24px;
  height: 24px;
  fill: var(--accent);
`;

export const Typography = styled.p`
  /* font-size: 18px;
  font-weight: 500;
  line-height: 20px; /* 111.111% */
  /* letter-spacing: -0.18px; */
  /* color: var(--colors-title-inverse); */

  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

export const AuthBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 14px 39px;
  border-radius: 30px;
  border: 1px solid var(--colors-border);
  margin-left: 10px;

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
