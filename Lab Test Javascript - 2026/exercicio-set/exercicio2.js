
//Dados de entrada - Aqui é um Array de textos (strings)
const dados = [
  "1;Ana Clara Souza;anaclara@example.com;login",
 "2;Bruno Silva;bruno@example.com;login",
 "1;Ana Clara Souza;anaclara@example.com;login",
 "3;Carla Andrade;carla@example.com;logout",
 "2;Bruno Silva;bruno@example.com;logout",
 "2;Bruno Silva;bruno@example.com;logout",
 "4;Diego Rezende;diegorezende@example.com;login",
 "3;Carla Andrade;carla@example.com;login",
 "5;Ana Beatriz Nogueira;anabeatriz@example.com;login",
 "4;Diego Rezende;diegorezende@example.com;login",
 "5;Ana Beatriz Nogueira;anabeatriz@example.com;login",
 "6;Bianca Ferreira;biancaferreira@example.com;login",
 "7;Paulo Lima;paulolima@example.com;login",
 "1;Ana Clara Souza;anaclara@example.com;login",
 "6;Bianca Ferreira;biancaferreira@example.com;logout"
];

const usuariosLogados = new Set();
const dadosUsuarios = new Map();

for (let linha of dados){
    const [id, nome, email, acao] = linha.split(";");

    if (acao === "login") {
        if (usuariosLogados.has(id)) {
            console.log(`LOGIN IGNORADO: USUÁRIO ID ${id} já está logado.`);
        
        } else  {
            usuariosLogados.add(id);
            dadosUsuarios.set(id, { nome, email });
            console.log(`LOGIN: Usuários logados -> ID: ${id}, Nome: ${nome}, Email: ${email}`);
            }
        } else if (acao === "logout") {
            if (!usuariosLogados.has(id)) {
                console.log(`LOGOUT IGNORADO: Usuário ID ${id} não está logado.`);
            } else {
                usuariosLogados.delete(id);
                const usuario = dadosUsuarios.get(id);
                console.log(`LOGOUT: Usuário deslogado -> ID: ${id}, Nome: ${usuario.nome}`);

            }
        }
}



const listaFinal = [];

for (let id of usuariosLogados) {
    const usuario = dadosUsuarios.get(id);
    listaFinal.push({ id, ...usuario});
}
listaFinal.sort((a, b) => a.nome.localeCompare(b.nome));

console.log("\n=== Usuários logados ordenados por nome ===");

for (let u of listaFinal) {
    console.log(`-ID: ${u.id}, Nome: ${u.nome}, Email: ${u.email}`);
    
}

console.log(`\nTotal de usuários logados no momento: ${usuariosLogados.size}`);