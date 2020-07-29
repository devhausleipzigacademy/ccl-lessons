const base = BigInt(parseInt(process.argv[2]) || 2);
const limit = BigInt(parseInt(process.argv[3]) || 20);

let value = 1n;

for (let counter = 0n; ; ++counter) {
  console.log(`${base}^${counter} = ${value}`);
  if (counter == limit) break;
  value *= base;
}
