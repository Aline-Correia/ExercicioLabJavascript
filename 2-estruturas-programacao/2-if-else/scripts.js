let idade = 19;
if (idade >= 18) {
    console.log("Você é maior de idade.");
} 
if (idade < 18) {
    console.log("Você é menor de idade.");
}

let nome = "Ana";
if (nome === "Ana") {
    console.log("Olá, Ana!");
} else {
    console.log("Olá, visitante!");
}
    
let passaportoValido = true;
if ( idade >= 18 && passaportoValido ) {
    console.log("Você pode viajar para o exterior sozinho");
} else {
    console.log("Você só pode viajar para o exterior acompanhado.");
}

let a = 5;
let b = 10;

if (a + b == 12) {
    console.log("A soma de a e b é igual a 12.");
} else if (b == 12) {
    console.log("b é igual a 12.");
} else if (a == 5) {
    console.log("a é igual a 5.");
} else {    
    console.log("Nenhuma das condições anteriores foi atendida.");
}
