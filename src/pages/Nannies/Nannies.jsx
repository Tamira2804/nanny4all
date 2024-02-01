import React, { useState } from "react";
import { Wrapper } from "./Nannies.styled";
import NanniesList from "components/NanniesList";
import Filters from "components/Filters";
import Header from "components/Header/Header";

const Nannies = () => {
  const [filterValue, setFilterValue] = useState(null);
  const [nannies, setNannies] = useState([]);
  const [visibleNannies, setVisibleNannies] = useState(3);

  return (
    <>
      <Wrapper>
        <Header background={"var(--accent)"} />
        <Filters setFilterValue={setFilterValue} />
        <NanniesList filterValue={filterValue} nannies={nannies} />
      </Wrapper>
    </>
  );
};

export default Nannies;
