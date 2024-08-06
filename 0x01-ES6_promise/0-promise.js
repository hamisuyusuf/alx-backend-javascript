// 0-promise.js
export default function getResponseFromAPI() {
  return new Promise((resolve) => {
    // Simulate a call with a delay
    setTimeout(() => {
      resolve("Success");
    }, 1000);
  });
}

