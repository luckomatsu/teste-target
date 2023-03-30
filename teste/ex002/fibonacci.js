let num = parseInt(prompt("Digite um número inteiro: "));
let fibonacci = [0, 1];
while (fibonacci[fibonacci.length - 1] < num) {
  fibonacci.push(fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2]);
}

if (fibonacci.includes(num)) {
  console.log(`O número ${num} pertence à sequência de Fibonacci.`);
} else {
  console.log(`O número ${num} não pertence à sequência de Fibonacci.`);
}