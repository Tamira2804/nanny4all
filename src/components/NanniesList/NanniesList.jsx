import React, { useEffect, useState } from "react";
import { List } from "./NanniesList.styled";
import NannyCard from "components/NannyCard";
import { Formik } from "formik";
import { filterArray, renderSelected } from "helpers";

const NanniesList = ({ nannies, filterValue }) => {
  const elementsOnPage = 3;
  // console.log("nannies:", nannies);

  const [loadedNannies, setLoadedNannies] = useState(elementsOnPage);
  const filteredNannies = filterArray(nannies, filterValue);
  const renderedNannies = renderSelected(filteredNannies, 0, loadedNannies);

  // useEffect(() => {
  //   if (nannies.length > 0 && nannies.length <= loadedNannies) {

  //   }
  // }, [])

  return (
    <Formik>
      <List>
        {renderedNannies.map((nanny, index) => (
          <NannyCard key={index} nanny={nanny} />
        ))}
      </List>
    </Formik>
  );
};

export default NanniesList;
