export default function cleanSet(set, startString) {
  // Return an empty string 
  if (startString === '') {
    return '';
  }

  // Filter and map set values
    return [...set]
        .filter((value) => value.startsWith(startString))
        .map((value) => value.slice(startString.length))
        .join('-');
}
