function countFrequency(arr, size, nDP) {
  // Creating a HashMap containing integer
  // as a key and occurrences as a value
  let freqMap = new Map();

  // Initialize a map with amount equal to the data points present in the data segment
  for (let i = 0; i < nDP; i++) {
    freqMap.set(i, 0);
  }

  for (let i = 0; i < size; i++) {
    if (freqMap.has(arr[i])) {
      // If number is present in freqMap,
      // incrementing it's count by 1
      freqMap.set(arr[i], freqMap.get(arr[i]) + 1);
    } else {
      // If integer is not present in freqMap,
      // putting this integer to freqMap with 1 as it's value
      freqMap.set(arr[i], 1);
    }
  }

  return freqMap;
}

export default countFrequency;
