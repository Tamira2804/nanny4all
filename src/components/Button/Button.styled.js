import styled from "styled-components";

export const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "48px"};
  margin-top: 40px;

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

  transition: color var(--transition), background-color var(--transition);
  /* 
  ${({ disabled }) =>
    disabled &&
    `
    background-color: var(--accent-light);
    cursor: not-allowed;

    &:hover,
    &:focus {
    background-color: var(--accent-light);
    color: var(--colors-title-inverse);
    border: none;
  }
  `};

  ${({ disabled }) =>
    !disabled &&
    `
    color: var(--accent);
    background-color: var(--colors-title-inverse);
    border: 1px solid var(--accent);
  }
  `}; */
`;
