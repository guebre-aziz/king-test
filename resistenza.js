/**
 * @param {number} number value to find its resistance
 * @returns {number}
 */
function getResistenza(number) {
  let resistenza = 0;

  function mult(n) {
    let accu = 1;
    while (n > 0) {
      let rest = n % 10;
      accu *= rest;
      n = Math.floor(n / 10);
    }
    return accu;
  }

  while (number >= 10) {
    number = mult(number);
    resistenza++;
  }

  return resistenza;
}

// console.log(getResistenza(3778888999));

/**
 * @param {number} initialNum initial value to start from. Default value = 0
 * @param {number} breakPoint limit resistance value that stops the research. Default value = 1
 * @param {function} resistanceFn function used to find the resistance value
 * @returns {object}
 */
function findMaxResistenza(initialNum = 0, breakPoint = 1, resistanceFn) {
  const t1 = new Date();
  let resistenza = 0;
  let num = initialNum;

  while (resistenza < breakPoint) {
    resistenza = resistanceFn(num);
    num++;
  }
  const t2 = new Date();
  console.log(t2 - t1, "ms");
  return { numero: num - 1, resistenza: resistenza };
}

console.log(findMaxResistenza(0, 10, getResistenza));

// massimo trovato ---> {numero=3778888999, resistenza=10}
