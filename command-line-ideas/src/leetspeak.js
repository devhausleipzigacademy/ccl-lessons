let input = process.argv[2];

let output = "";

for (let i = 0; i < input.length; ++i) {
  const char = input[i];
  const upperChar = char.toUpperCase();

  if (upperChar == "A") {
    output += "4";
  } else if (upperChar == "B") {
    output += "8";
  } else if (upperChar == "E") {
    output += "3";
  } else if (upperChar == "I") {
    output += "1";
  } else if (upperChar == "O") {
    output += "0";
  } else if (upperChar == "S") {
    output += "5";
  } else {
    output += upperChar;
  }
}

console.log(output);
