console.log("Exemplo de Map em JavaScript...");
// Criando um Map vazio
const usuarios = new Map();

// Adicionando pares chave → valor com set(chave, valor)
usuarios.set(1, { nome: 'Ana', perfil: 'admin' });
usuarios.set(2, { nome: 'Bruno', perfil: 'user' });
usuarios.set(3, { nome: 'Carla', perfil: 'guest' });
usuarios.set(4, { nome: 'Marcelo', perfil: 'guest' });

console.log(usuarios.size); // 4
console.log("-----------------------------");

console.log("Acessando valores em um Map...");
// Acessando valores pelo método get(chave)
console.log(usuarios.get(1)); // { nome: 'Ana', perfil: 'admin' }
console.log(usuarios.get(2)); // { nome: 'Bruno', perfil: 'user' }
console.log(usuarios.get(3)); // { nome: 'Carla', perfil: 'guest' }
console.log(usuarios.get(4)); // { nome: 'Marcelo', perfil: 'guest' }
console.log("-----------------------------");

console.log("Modificando um valor em um Map...");
// Modificando o perfil do usuário com chave 2
usuarios.set(2, { nome: 'Bruno', perfil: 'admin' });
console.log(usuarios.get(2)); // { nome: 'Bruno', perfil: 'admin' }
console.log("-----------------------------");

console.log("Iterando sobre um Map...");
for (const [chave, valor] of usuarios) {
    console.log("Chave: " + chave + ", Valor: ", valor);
}
console.log("-----------------------------");

console.log("Iterando sobre um Map com forEach...");
usuarios.forEach((valor, chave) => {
    console.log("Chave: " + chave + ", Valor: ", valor);
});
console.log("-----------------------------");


console.log("Iterando sobre as chaves de um Map...");
for (const chave of usuarios.keys()) {
    console.log("Chave: " + chave);
}
console.log("-----------------------------");
console.log("Iterando sobre os valores de um Map...");
for (const valor of usuarios.values()) {
    console.log("Valor: ", valor);
}
console.log("-----------------------------");


console.log("Removendo um par chave → valor de um Map...");
// Removendo o usuário com chave 3
usuarios.delete(3);
console.log("Após remoção, tamanho do Map: " + usuarios.size); // 3
console.log("-----------------------------");

console.log("Verificando existência de uma chave em um Map...");
console.log(usuarios.has(1)); // true
console.log(usuarios.has(5)); // false
console.log("-----------------------------");

console.log("Limpando um Map...");
usuarios.clear();
console.log("Após clear, tamanho do Map: " + usuarios.size); // 0
console.log("-----------------------------");


console.log("Usando diferentes tipos de chaves em um Map...");
const mapa = new Map();

const chaveObj = { id: 1 };
const chaveFuncao = function () { console.log("Isto é uma função"); };
const chaveStr = 'chave-string';

// As chaves podem ser de qualquer tipo
mapa.set(chaveObj, 'Valor para objeto');
mapa.set(chaveFuncao, 'Valor para função');
mapa.set(chaveStr, 'Valor para string');

console.log(mapa.get(chaveObj)); // 'Valor para objeto'
console.log(mapa.get(chaveFuncao)); // 'Valor para função'
console.log(mapa.get(chaveStr));  // 'Valor para string'
console.log("-----------------------------");

console.log("Exemplo encerrado.");