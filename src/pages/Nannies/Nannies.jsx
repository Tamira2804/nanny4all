import React from "react";
import { Wrapper } from "./Nannies.styled";
import NanniesList from "components/NanniesList";
import Filters from "components/Filters";
import Header from "components/Header/Header";

const Nannies = () => {
  return (
    <Wrapper>
      <Header />
      <Filters />
      <NanniesList />
    </Wrapper>
  );
};

export default Nannies;
