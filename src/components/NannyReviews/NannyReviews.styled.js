import styled from "styled-components";

export const List = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Block = styled.div`
  display: flex;
  gap: 12px;
  color: var(--colors-title);
  font-weight: var(--fw-medium);
`;

export const Author = styled.p`
  font-size: 16px;
  line-height: 20px; /* 125% */
  margin-bottom: 4px;
`;

export const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  line-height: 18px; /* 128.571% */

  & svg {
    width: 16px;
    height: 16px;
  }
`;

export const Text = styled.p`
  color: var(--colors-text);

  font-size: 16px;
  font-weight: var(--fw-medium);
  line-height: 20px; /* 125% */
`;
