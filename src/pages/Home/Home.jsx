import React from "react";
import {
  Wrapper,
  Hero,
  Left,
  Right,
  Title,
  Text,
  Btn,
  Svg,
} from "./Home.styled";
import sprite from "assets/icons/sprite.svg";
import Header from "components/Header/Header";

const Home = () => {
  return (
    <Wrapper>
      <Header fontColor="var(--colors-title-inverse)" />
      <Hero>
        <Left>
          <Title>Make Life Easier for the Family:</Title>
          <Text>Find Babysitters Online for All Occasions</Text>
          <Btn to={"/nannies"}>
            Click Me
            <Svg>
              <use href={`${sprite}#icon-arrow-right-up`} />
            </Svg>
          </Btn>
        </Left>
        <Right></Right>
      </Hero>
    </Wrapper>
  );
};

export default Home;
