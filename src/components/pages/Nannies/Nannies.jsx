import React from "react";
import { Wrapper } from "./Nannies.styled";
import NanniesList from "components/NanniesList";
import Filters from "components/Filters";

const Nannies = () => {
  return (
    <Wrapper>
      <Filters />
      <NanniesList />
    </Wrapper>
  );
};

export default Nannies;
