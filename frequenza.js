const testArr = [2, 4, 1, 5, 6, 3, 4, 2, 7, 4, 5, 4, 5];

/**
 * @param {array} arr array of integers
 * @returns {number}
 */
function getFrequente(arr) {
  const freqs = {};

  arr.forEach((n) => {
    if (freqs[n]) {
      freqs[n]++;
    } else freqs[n] = 1;
  });

  const freqsArray = Object.entries(freqs);
  freqsArray.sort((a, b) => a[1] - b[1]).reverse();

  return parseInt(freqsArray[0][0]);
}

console.log(getFrequente(testArr));

/**
 * @param {*} arr array of integers
 * @param {*} k length of most frequent numbers returned
 * @returns {[number]}
 */
function getFrequenti(arr, k) {
  const freqs = {};

  arr.forEach((n) => {
    if (freqs[n]) {
      freqs[n]++;
    } else freqs[n] = 1;
  });

  const freqsArray = Object.entries(freqs);
  freqsArray.sort((a, b) => a[1] - b[1]).reverse();

  return freqsArray.slice(0, k).map((n) => parseInt(n[0]));
}

// console.log(getFrequenti(testArr, 3));
