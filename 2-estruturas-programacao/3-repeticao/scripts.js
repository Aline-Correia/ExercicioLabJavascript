let x = 1;

console.log("Exemplo de while...");
while (x <= 10) {
    console.log("O valor de x é: " + x);
    x++; 
}
console.log("Laço encerrado. Valor final de x: " + x);
console.log("-----------------------------");

let y = 4;

console.log("Exemplo de do...while...");
do {
    console.log("O valor de y é: " + y);
    y--;
} while (y > 0);
console.log("Laço do...while encerrado. Valor final de y: " + y);
console.log("-----------------------------");

console.log("Exemplo de for...");
for (let i = 0; i < 5; i++) {
    console.log("O valor de i é: " + i);
}
console.log("Laço for encerrado.");
console.log("-----------------------------");

console.log("Exemplo de for...of e for...in...");
let frutas = ["Maçã", "Banana", "Laranja", "Uva"];

for (let fruta of frutas) {
    console.log("Fruta: " + fruta);
}
console.log("Laço for...of encerrado.");

for (let indice in frutas) {
    console.log("Índice: " + indice + ", Fruta: " + frutas[indice]);

    if ( frutas[indice] === "Laranja" ) {
        console.log("Encontrou a Laranja no índice: " + indice);
        break;
    }
}
console.log("Laço for...in encerrado.");
console.log("-----------------------------");


