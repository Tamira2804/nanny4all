import React, { useState, useEffect } from "react";

import { db } from "../../firebase";
import { ref, get } from "firebase/database";

import { Wrapper } from "./Nannies.styled";
import NanniesList from "components/NanniesList";
import Filters from "components/Filters";
import Header from "components/Header/Header";

const Nannies = () => {
  const [filterValue, setFilterValue] = useState("alphabetAsc");
  const [nannies, setNannies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const nanniesRef = ref(db, "babysitters");
        const snapshot = await get(nanniesRef);

        if (snapshot.exists()) {
          // Отримати дані та встановити їх у стан
          const data = snapshot.val();

          setNannies(data);
        } else {
          console.log("No data available");
        }
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Header background={"var(--accent)"} />
      <Wrapper>
        <Filters setFilterValue={setFilterValue} />
        <NanniesList nannies={nannies} filterValue={filterValue} />
      </Wrapper>
    </>
  );
};

export default Nannies;
