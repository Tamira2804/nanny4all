import React from "react";
import { InputSelect } from "./Filters.styled";

const filterOptions = [
  { value: "alphabetAsc", label: "A to Z" },
  { value: "alphabetDesc", label: "Z to A" },
  { value: "priceTo10", label: "Less then 10$" },
  { value: "priceUp10", label: "Greater then 10$" },
  { value: "ratingDesc", label: "Popular" },
  { value: "ratingAsc", label: "Not popular" },
  { value: "showAll", label: "Show all" },
];

const Filters = ({ setFilterValue }) => {
  const handleFilterChange = (selectedFilter) => {
    setFilterValue(selectedFilter.value);
  };

  return (
    <InputSelect
      options={filterOptions}
      defaultValue={filterOptions[0]}
      name="filter"
      onChange={handleFilterChange}
    />
  );
};

export default Filters;
