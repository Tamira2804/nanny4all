export function renderSelected(filteredItems, startIndex, endIndex) {
  const renderSelect = filteredItems?.slice(startIndex, endIndex);

  return renderSelect;
}
