// Refer to Task 4 in your Instructions to complete this task

/* for (let i = 1; i <= 105; i++) {
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

for (let i = 1; i <= 105; i++) {
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