// Refer to Task 6 in your Instructions to complete this task

const prompt = require('prompt-sync')();

let validLimit = false;
let limit;

while (!validLimit) {
  limit = +prompt("Establece un número límite: ");
  if (!isNaN(limit) && isFinite(limit) && limit > 0) {
    validLimit = true;
  } else {
    console.log("Ingresa un número válido (Mayor a 0).");
  }
}

const generatedNumbers = [];

for (let i = 1; i <= limit; i++) {
  let output = "";

  if (i % 3 === 0) {
    output += "Fizz";
  }
  if (i % 5 === 0) {
    output += "Buzz";
  }
  if (i % 7 === 0) {
    output += "Woof";
  }

  console.log(output === "" ? i : output);
  generatedNumbers.push(output === "" ? i : output);
};

console.log("Números generados:", generatedNumbers);