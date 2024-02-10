export function filterArray(array, value) {
  switch (value) {
    case "alphabetAsc":
      return array.slice().sort((a, b) => {
        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase();
        return nameA.localeCompare(nameB);
      });
    case "alphabetDesc":
      return array.slice().sort((a, b) => {
        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase();
        return nameB.localeCompare(nameA);
      });
    case "priceTo10":
      return array.filter((item) => item.price_per_hour < 10);
    case "priceUp10":
      return array.filter((item) => item.price_per_hour > 10);
    case "ratingDesc":
      return array.slice().sort((a, b) => b.rating - a.rating);
    case "ratingAsc":
      return array.slice().sort((a, b) => a.rating - b.rating);
    case "showAll":
    default:
      return array;
  }
}
