import styled from "styled-components";

export const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "48px"};

  font-size: 16px;
  font-weight: 500;
  line-height: 20px; /* 125% */
  letter-spacing: -0.16px;

  color: var(--colors-title-inverse);
  background-color: var(--accent);
  border: none;
  border-radius: 30px;
  cursor: pointer;

  &:hover,
  &:focus {
    color: var(--accent);
    background-color: var(--colors-title-inverse);
    border: 1px solid var(--accent);
  }
`;
