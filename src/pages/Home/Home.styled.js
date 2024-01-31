import styled from "styled-components";
import Image from "assets/images/hero.png";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const Hero = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 736px;
  display: flex;
`;

export const Left = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  border-radius: 30px 0px 0px 30px;
  padding: 0 64px 0 96px;
  background-color: var(--accent);
`;

export const Title = styled.h2`
  /* width: 517px; */
  color: var(--colors-title-inverse);
  font-size: 70px;
  font-style: normal;
  font-weight: var(--fw-medium);
  line-height: 70px; /* 100% */
  letter-spacing: -2.1px;

  margin-bottom: 28px;
`;

export const Text = styled.p`
  color: var(--colors-title-inverse);
  font-size: 28px;
  font-style: normal;
  font-weight: var(--fw-regular);
  line-height: 30px; /* 107.143% */
  letter-spacing: -0.56px;

  margin-bottom: 44px;
`;
export const Btn = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 18px 50px;
  background-color: transparent;
  border-radius: 30px;
  border: 1px solid var(--colors-border);

  color: var(--colors-title-inverse);
  font-size: 20px;
  font-weight: var(-fw-medium);
  line-height: 24px; /* 120% */
  letter-spacing: -0.2px;

  gap: 18px;

  &:hover,
  &:focus {
    cursor: pointer;
    /* transform: translateY(2px); */
  }

  &:hover svg,
  &:focus svg {
    transform: rotate(53deg);
  }
`;
export const Svg = styled.svg`
  width: 24px;
  height: 24px;
  fill: var(--colors-title-inverse);
  transition: transform 200ms linear;
`;

export const Right = styled.div`
  width: 50%;
  padding: 20px;
  border-radius: 0px 30px 30px 0px;
  background-image: url(${Image});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: right;
  /* width: 100%;
  height: 736px; */
  overflow: hidden;
  filter: brightness(60%);
`;
