// Criando um Set vazio
const numeros = new Set();

// Adicionando valores
numeros.add(1);
numeros.add(2);
numeros.add(2); // duplicado, será ignorado
numeros.add(3);
numeros.add(4);
numeros.add(5);

console.log(numeros);      // Set(5) { 1, 2, 3, 4, 5 }
console.log("Tamanho do Set: " + numeros.size); // 5
console.log("--------------------------------");

// Verificando a existência de um valor
console.log("Contém 2? " + numeros.has(2)); // true
console.log("Contém 6? " + numeros.has(6)); // false
console.log("--------------------------------");


console.log("Iterando sobre os valores do Set:");
for (const num of numeros) {
    console.log(num);
}
console.log("--------------------------------");

// Removendo um valor
numeros.delete(3);
console.log("Após remover o 3:");
console.log(numeros); // Set(4) { 1, 2, 4, 5 }
console.log("--------------------------------");

// Limpando o Set
numeros.clear();
console.log("Após limpar o Set:");
console.log(numeros); // Set(0
console.log("--------------------------------");


console.log("Inicializando um Set a partir de um array, removendo os duplicados:");
const comDuplicados = [1, 2, 2, 3, 3, 3, 4];
const unico = new Set(comDuplicados);
console.log(unico); // Set(4) { 1, 2, 3, 4 }
console.log("Convertendo o Set de volta para um array:");
const arrayUnico = Array.from(unico);
console.log(arrayUnico); // [1, 2, 3, 4]
console.log("--------------------------------");


console.log("Ugtilizando forEach para iterar sobre o Set:");
const setObj = new Set();

const obj1 = { id: 1, name: "Alice" };
const obj2 = { id: 1, name: "Roberto" };
const obj3 = { id: 2, name: "Maria" };

setObj.add(obj1);
setObj.add(obj2);
setObj.add(obj3);
setObj.forEach((value) => {
    console.log(value);
});
console.log("--------------------------------");


