import React, { useState } from "react";
import { List } from "./NanniesList.styled";
import NannyCard from "components/NannyCard";
import Button from "components/Button";
import { Formik } from "formik";
import { filterArray, renderSelected } from "helpers";

const NanniesList = ({ nannies, filterValue }) => {
  const elementsOnPage = 3;
  // console.log("nannies:", nannies);

  const [loadedNannies, setLoadedNannies] = useState(elementsOnPage);
  const filteredNannies = filterArray(nannies, filterValue);
  const renderedNannies = renderSelected(filteredNannies, 0, loadedNannies);

  const handleLoadMore = () => {
    const newLoadedNannies = loadedNannies + elementsOnPage;
    setLoadedNannies(
      newLoadedNannies > filteredNannies.length
        ? filteredNannies.length
        : newLoadedNannies
    );
  };

  // useEffect(() => {
  //   if (nannies.length > 0 && nannies.length <= loadedNannies) {

  //   }
  // }, [])

  return (
    <>
      <Formik>
        <List>
          {renderedNannies.map((nanny, index) => (
            <NannyCard key={index} nanny={nanny} />
          ))}
        </List>
      </Formik>
      {loadedNannies < filteredNannies.length && (
        <Button width="159px" text="Load More" onClick={handleLoadMore} />
      )}
    </>
  );
};

export default NanniesList;
