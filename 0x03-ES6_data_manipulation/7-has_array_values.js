export default function hasValuesFromArray(set, array) {
  // Check if every element in the array exists in the set
  return array.every((value) => set.has(value));
}
