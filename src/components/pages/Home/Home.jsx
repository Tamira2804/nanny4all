import React from "react";
import { Wrapper, Left, Right, Title, Text, Btn, Svg } from "./Home.styled";
import sprite from "../../../assets/icons/sprite.svg";

const Home = () => {
  return (
    <Wrapper>
      <Left>
        <Title>Make Life Easier for the Family:</Title>
        <Text>Find Babysitters Online for All Occasions</Text>
        <Btn>
          Click Me
          <Svg>
            <use href={`${sprite}#icon-arrow-right-up`} />
          </Svg>
        </Btn>
      </Left>
      <Right></Right>
    </Wrapper>
  );
};

export default Home;
