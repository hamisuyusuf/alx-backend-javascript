export default function updateUniqueItems(map) {
  // Check if the argument is a Map
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }

    // Iterate over the Map and update the quantity for items with quantity 1
  map.forEach((value, key) => {
    if (value === 1) {
      map.set(key, 100);
        }
    });
}

// Example usage:
import groceriesList from "./9-groceries_list.js"; // Assuming this file exists

const map = groceriesList();
console.log(map);

updateUniqueItems(map);
console.log(map);
