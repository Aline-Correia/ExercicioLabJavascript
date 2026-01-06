console.log("Exemplo de switch...case...");
const diaNumero = 3;
let nomeDoDia;

switch (diaNumero) {
  case 1:
    nomeDoDia = "Domingo";
    break;
  case 2:
    nomeDoDia = "Segunda-feira";
    break;
  case 3:
    nomeDoDia = "Terça-feira";
    break;
  case 4:
    nomeDoDia = "Quarta-feira";
    break;
  case 5:
    nomeDoDia = "Quinta-feira";
    break;
  case 6:
    nomeDoDia = "Sexta-feira";
    break;
  case 7:
    nomeDoDia = "Sábado";
    break;
  default:
    nomeDoDia = "Dia inválido";
}

console.log(nomeDoDia); // Saída: "Terça-feira"
console.log("-----------------------------");


console.log("Exemplo de switch...case com múltiplas condições...");
const comando = "stop";

switch (comando) {
  case "start":
    console.log("Iniciando o sistema...");
    break;
  case "stop":
    console.log("Parando o sistema...");
    break;
  case "restart":
    console.log("Reiniciando o sistema...");
    break;
  default:
    console.log("Comando inválido.");
}
console.log("-----------------------------");


console.log("Exemplo de switch...case com múltiplas condições usando expressões...");
const idade = 17;
let categoria;

switch (true) {
  case (idade < 12):
    categoria = "Criança";
    break;
  case (idade >= 12 && idade < 18):
    categoria = "Adolescente";
    break;
  case (idade >= 18 && idade < 60):
    categoria = "Adulto";
    break;
  case (idade >= 60):
    categoria = "Idoso";
    break;
  default:
    categoria = "Idade inválida";
}

console.log("Faixa etária: " + categoria); // "Adolescente"
console.log("-----------------------------");


console.log("Exemplo de switch...case com múltiplas condições complexas...");
const tipoCliente = "premium"; // "comum", "premium", "vip"
const valorCompra = 850;
let desconto;

switch (true) {
  // Clientes comuns
  case (tipoCliente === "comum" && valorCompra < 500):
    desconto = 0.02; // 2%
    break;
  case (tipoCliente === "comum" && valorCompra >= 500):
    desconto = 0.05; // 5%
    break;

  // Clientes premium
  case (tipoCliente === "premium" && valorCompra < 500):
    desconto = 0.07; // 7%
    break;
  case (tipoCliente === "premium" && valorCompra >= 500):
    desconto = 0.10; // 10%
    break;

  // Clientes VIP
  case (tipoCliente === "vip" && valorCompra < 1000):
    desconto = 0.12; // 12%
    break;
  case (tipoCliente === "vip" && valorCompra >= 1000):
    desconto = 0.15; // 15%
    break;

  default:
    desconto = 0;
}

console.log(`Desconto: ${desconto * 100}%`); // "Desconto: 10%"
