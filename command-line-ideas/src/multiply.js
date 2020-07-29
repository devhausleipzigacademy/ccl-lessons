const factor = parseInt(process.argv[2]);

for (let i = 1; i <= factor; ++i) {
  console.log(`${i} * ${factor} == ${i * factor}`);
}
