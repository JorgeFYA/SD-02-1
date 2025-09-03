// Refer to Task 7 in your Instructions to complete this task
/* ¿Cómo intentarías reemplazar una secuencia de números primos impares con una nueva palabra dentro de una lista o arreglo?

Se proporciona un ejemplo de lista en el arreglo buzzWords. ¡Agrega tus propias palabras para números primos más grandes! */

let buzzWords = [
    "Fizz",
    "Buzz",
    "Woof",
    "Bark",
    "Awoo",
    "Bang",
    "Boom",
    "Traka"
];

const isPrime = (num) => {
  if (num < 2) return false;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

for (let i = 1; i <= 105; i++) {
  if (isPrime(i) && i % 2 !== 0) {
    // Palabra al azar con un rand
    console.log(buzzWords[Math.floor(Math.random() * buzzWords.length)]);
  } else {
    console.log(i);
  }
}