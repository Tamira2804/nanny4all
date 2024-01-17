import styled from "styled-components";

export const CardThumb = styled.div`
  min-width: 100%;
  display: flex;
  border-radius: 24px;
  background-color: var(--colors-bg-primary);
  padding: 24px;
  gap: 24px;
`;
export const AvatarBlock = styled.div`
  min-width: 120px;
  height: 120px;

  padding: 12px;
  border-radius: 30px;
  border: 2px solid rgba(240, 63, 59, 0.2);
`;
export const Image = styled.img`
  width: 96px;
  height: 96px;
  border-radius: 15px;
`;

//  Information Block
export const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;

  gap: 24px;
`;
// Block--1
export const TitleBlock = styled.div`
  display: flex;

  justify-content: space-between;
  align-items: flex-start;
`;
export const NameBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
export const Title = styled.p`
  color: var(--colors-title);

  font-size: 24px;
  font-weight: var(--fw-medium);
  line-height: 24px; /* 100% */
`;
export const Subtitle = styled.p`
  color: var(--colors-title-gray);

  font-size: 16px;
  font-weight: var(--fw-medium);
  line-height: 24px; /* 150% */
`;
export const AspectList = styled.ul`
  display: flex;
  margin-right: 74px;
`;
export const AspectItem = styled.li`
  display: flex;
  gap: 8px;
  align-items: center;
  font-size: 16px;
  font-weight: var(--fw-medium);
  line-height: 24px; /* 150% */

  &:not(:last-child) {
    border-right: 1px solid var(--colors-border-aspect);
    margin-right: 16px;
    padding-right: 16px;
  }

  & svg {
    width: 16px;
    height: 16px;
    fill: none;
  }
  & span {
    color: var(--price-color);
  }
`;
// Block--2
export const CharactersList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: fit-content;
  overflow: hidden;
  gap: 8px;
`;
export const CharactersItem = styled.li`
  display: flex;
  background-color: var(--colors-bg-secondary);
  padding: 8px 16px;
  border-radius: 24px;
  color: var(--colors-title);
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;

  & span {
    color: var(--colors-title-gray);
    margin-right: 4px;
  }
`;
// Block--3
export const Description = styled.p`
  color: var(--colors-text);
`;

export const Btn = styled.button`
  color: var(--colors-title);
  font-size: 16px;
  font-weight: var(--fw-medium);
  line-height: 24px; /* 150% */

  text-decoration: underline;
  background: none;
  border: none;
  cursor: pointer;
`;
