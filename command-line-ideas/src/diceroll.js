const rollDice = function (numSides) {
  const rand = Math.random();
  for (let i = 1; i <= numSides; ++i) {
    if (rand < i / numSides) {
      return i;
    }
  }
  return numSides;
};

const addDice = function (n) {
  let result = 0;
  for (let i = 0; i < n; ++i) {
    result += rollDice(6);
  }
  return result;
};

const stats = {};

for (let i = 0; i < 1000000; ++i) {
  const result = addDice(5);

  if (!stats[result]) {
    stats[result] = 0;
  }

  stats[result] += 1;
}

console.log(JSON.stringify(stats));
