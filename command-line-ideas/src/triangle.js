const limit = parseInt(process.argv[2] || 10);

for (let i = 1; i < limit; ++i) {
  console.log(
    "-".repeat(40 + 5 + Math.round(40 * Math.sin(i / 5)) + 10 * Math.random())
  );
}
