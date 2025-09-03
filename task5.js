// Refer to Task 5 in your Instructions to complete this task
/* for (let i = 1; i <= limit; i++) {
  if (i % 3 === 0 && i % 5 === 0 && i % 7 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else if (i % 7 === 0) {
    console.log("Woof");
  } else {
    console.log(i);
  }
}; */
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
};
