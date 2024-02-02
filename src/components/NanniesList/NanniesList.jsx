import React from "react";
import { List } from "./NanniesList.styled";
import NannyCard from "components/NannyCard";
import { Formik } from "formik";

const NanniesList = ({ nannies, filterValue }) => {
  const elementsOnPage = 3;

  return (
    <Formik>
      <List>
        {nannies.map((nanny) => (
          <NannyCard key={nanny.id} nanny={nanny} />
        ))}
      </List>
    </Formik>
  );
};

export default NanniesList;
