import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--colors-bg-overlay);
  z-index: 999;
`;

export const ModalWindow = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 30px;
  background-color: var(--colors-bg-primary);

  width: 600px;
  padding: 64px;

  .modal {
    opacity: 0;
    transition: opacity var(--transition);
  }

  .modal.open {
    opacity: 1;
    visibility: visible;
  }
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 32px;
  height: 32px;

  border: none;
  background-color: inherit;
  cursor: pointer;
  outline: none;
  color: var(--colors-title);
  transition: color var(--transition);

  :hover,
  :focus {
    color: var(--accent);
  }

  & svg {
    stroke: var(--colors-title);
  }
`;
