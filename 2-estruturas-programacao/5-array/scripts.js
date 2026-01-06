console.log("Exemplo de arrays em JavaScript...");
// Criando um array de nomes
const nomes = ["Ana", "Bruno", "Carla", "Daniel"];

// Acessando pelo índice (começa em 0)
console.log(nomes[0]); // "Ana"
console.log(nomes[1]); // "Bruno"
console.log(nomes[2]); // "Carla"
console.log(nomes[3]); // "Daniel"
console.log("-----------------------------");

console.log("Modificando um array..."); 
// Modificando o segundo elemento
nomes[1] = "Beatriz";
console.log(nomes); // ["Ana", "Beatriz", "Carla", "Daniel"]

console.log("-----------------------------");
console.log("Propriedades e métodos de arrays...");
// Tamanho do array
console.log("Tamanho do array: " + nomes.length); // 4
// Adicionando um elemento no final
nomes.push("Eduardo");
console.log("Após push: " + nomes); // ["Ana", "Beatriz", "Carla", "Daniel", "Eduardo"]
// Removendo o último elemento
nomes.pop();
console.log("Após pop: " + nomes); // ["Ana", "Beatriz", "Carla", "Daniel"]
// Removendo o primeiro elemento
nomes.shift();
console.log("Após shift: " + nomes); // ["Beatriz", "Carla", "Daniel"]
// Adicionando um elemento no início
nomes.unshift("Ana");
console.log("Após unshift: " + nomes); // ["Ana", "Beatriz", "Carla", "Daniel"]
console.log("-----------------------------");
console.log("Iterando sobre um array...");
for (let i = 0; i < nomes.length; i++) {
    console.log("Nome no índice " + i + ": " + nomes[i]);
}
console.log("Laço encerrado.");

console.log("-----------------------------");

console.log("Exemplo de arrays multidimensionais...");
// Criando um array 2D (matriz)
const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
// Acessando elementos
console.log("Elemento na posição (0,0): " + matriz[0][0]); // 1
console.log("Elemento na posição (1,2): " + matriz[1][2]); // 6
console.log("Elemento na posição (2,1): " + matriz[2][1]); // 8
console.log("-----------------------------");

console.log("Iterando sobre um array multidimensional...");
for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        console.log("Elemento na posição (" + i + "," + j + "): " + matriz[i][j]);
    }
}
console.log("Laço encerrado.");
console.log("-----------------------------");


console.log("Métodos úteis de arrays: indexOf...");
const cores = ["vermelho", "verde", "azul", "amarelo", "roxo"];

console.log(cores.indexOf("verde")); // 1
console.log(cores.indexOf("preto")); // -1 (não encontrado)
console.log("-----------------------------");


console.log("Métodos úteis de arrays: includes...");
const maiscores = ["cinza", "branco", "rosa", "laranja", "lilás"];

console.log(maiscores.includes("rosa")); // true
console.log(maiscores.includes("preto")); // false
console.log("-----------------------------");

console.log("Métodos úteis de arrays: slice...");
const frutas = ["maçã", "banana", "laranja", "limão", "pera"];
const citricas = frutas.slice(2, 4); // do índice 2 ao 3
console.log("Frutas citricas:" + citricas); // ["laranja", "limão"]
console.log("-----------------------------");

console.log("Métodos úteis de arrays: splice...");
const animais = ["cachorro", "gato", "coelho", "hamster"];
animais.splice(2, 1, "papagaio"); // remove 1 elemento no índice 2 e adiciona "papagaio"
console.log(animais); // ["cachorro", "gato", "papagaio", "hamster"]
console.log("-----------------------------");


console.log("Métodos úteis de arrays: forEach...");
const numeros = [10, 20, 30, 40, 50];

numeros.forEach((numero, indice) => {
  console.log(`Índice: ${indice}, Valor: ${numero}`);
});
console.log("Laço forEach encerrado.");
console.log("-----------------------------");

console.log("Métodos úteis de arrays: map...");
const maisnumeros = [1, 2, 3, 4];
const dobrados = maisnumeros.map((n) => n * 2);

console.log("Números dobrados: " + dobrados); // [2, 4, 6, 8]
console.log("Array original não mudou: " + maisnumeros);  // [1, 2, 3, 4] (original não muda)
console.log("-----------------------------");


console.log("Métodos úteis de arrays: filter...");
const valores = [5, 10, 15, 20, 25, 30, 35, 40];
const maioresQue15 = valores.filter((v) => v > 15);  // Quero somente os números maiores que 15
console.log(maioresQue15); // [20, 25, 30, 35, 40]
console.log("-----------------------------");


console.log("Métodos úteis de arrays: reduce...");
const maisvalores = [5, 10, 15, 20, 25, 30];
// acumulador começa em 0, e vamos somando cada valor do array
const somaTotal = maisvalores.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);  // 0 é o valor inicial do acumulador
console.log("Soma total: " + somaTotal); // 105
console.log("-----------------------------");


console.log("Métodos úteis de arrays: find...");
const usuarios = [
  { id: 1, nome: "Ana" },
  { id: 2, nome: "Bruno" },
  { id: 3, nome: "Carla" }
];
const usuario = usuarios.find((u) => u.id == 2);
console.log(usuario); // { id: 2, nome: "Bruno" }

console.log("-----------------------------");

console.log("Métodos úteis de arrays: findIndex...");
const maisusuarios = [
  { id: 1, nome: "Bianca" },
  { id: 2, nome: "Marcelo" },
  { id: 3, nome: "Andréia" },
  { id: 4, nome: "Rafael" }
];

const indice = maisusuarios.findIndex((u) => u.nome === "Andréia");
console.log(indice); // 3

console.log("-----------------------------");

console.log("Métodos úteis de arrays: join...");
const partes = ["2025", "05", "10"];
const data = partes.join("-");
console.log("Data concatenada:" + data); // "2025-05-10"

console.log("-----------------------------");

console.log("Métodos úteis de arrays: sort...");
const letras = ["d", "a", "c", "b", "e", "g", "f"];
letras.sort();
console.log(letras); // ["a", "b", "c", "d", "e", "f", "g"]
console.log("-----------------------------");

console.log("Métodos úteis de arrays: sort com números - neste caso tem que passar uma função de comparação");
const numerosParaOrdenacao = [10, 2, 5, 1];
numerosParaOrdenacao.sort((a, b) => a - b);
console.log("Números ordenados:" + numerosParaOrdenacao); // [1, 2, 5, 10]
console.log("-----------------------------");

console.log("Fim dos exemplos de arrays.");
