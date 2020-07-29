const size = parseInt(process.argv[2]) || 10;

for (let i = 0; i < size; ++i) {
  const pattern = i % 3 == 0 ? "\\@_" : i % 3 == 1 ? " | " : `/"\\`;
  // const pattern = i % 3 == 0 ? "|X" : i % 3 == 1 ? "|X" : `|O`;
  console.log(`|| ${pattern.repeat(size / 2)} ||`);
}
