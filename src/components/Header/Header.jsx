import React from "react";
import { Bar, Logo, Wrapper } from "./Header.styled";
import AuthBar from "components/AuthBar/AuthBar";
import NavBar from "components/NavBar/Navbar";

const Header = ({ background }) => {
  return (
    <Wrapper background={background}>
      <Logo>Nannies.Servises</Logo>
      <Bar>
        <NavBar />
        <AuthBar />
      </Bar>
    </Wrapper>
  );
};

export default Header;
