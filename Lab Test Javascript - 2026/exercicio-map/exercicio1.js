const dadosTexto = `
1;Adriana;2025-12-01
1;Adriana;2025-12-01
2;Marcos;2025-12-02
1;Adriana;2025-12-02
1;Adriana;2025-12-02
2;Marcos;2025-12-02
3;Roberta;2025-12-03
1;Adriana;2025-12-03
4;Fernanda;2025-12-05
4;Fernanda;2025-12-05
1;Adriana;2025-12-05
2;Marcos;2025-12-05
2;Marcos;2025-12-05
4;Fernanda;2025-12-05
2;Marcos;2025-12-05
2;Marcos;2025-12-05
4;Fernanda;2025-12-05
4;Fernanda;2025-12-05
2;Marcos;2025-12-05
4;Fernanda;2025-12-06
2;Marcos;2025-12-06
1;Adriana;2025-12-06
2;Marcos;2025-12-06
3;Roberta;2025-12-06
2;Marcos;2025-12-06
1;Adriana;2025-12-06
2;Marcos;2025-12-06
3;Roberta;2025-12-06
2;Marcos;2025-12-06
1;Adriana;2025-12-06
`;

const linhas = dadosTexto.trim().split("\n")
console.log(dadosTexto)

const acessosArray = linhas.map(linha => {
    const [id, nome, dataAcesso] = linha.split(";");

    return {
        id: Number(id),
        nome: nome,
        dataAcesso: dataAcesso
    };
});

console.log('------------------------------------------------------------------')
console.log('Array original de acessos (com duplicados): ')
console.log('Tamanho do Array: ', acessosArray.length)

acessosArray.forEach(acesso => {
    console.log(`${acesso.nome} (ID: ${acesso.id}) - Data de Acesso: ${acesso.dataAcesso}`)
})

const mapAcessosPorDia = new Map()

acessosArray.forEach(acesso =>{
    const chave = `${acesso.id}-${acesso.dataAcesso}`

    if (mapAcessosPorDia.has(chave)){
        mapAcessosPorDia.get(chave).total++
        } else {
            mapAcessosPorDia.set(chave, {
                id: acesso.id,
                nome: acesso.nome,
                dataAcesso: acesso.dataAcesso,
                total: 1
            });
        }
        })

        console.log('-------------------------------------------------------------------')
        console.log('Registrando quantidade de acessos por dia utilizando Map')
        console.log('Quantidade total de entradasúnicas no Map: ', mapAcessosPorDia.size)

        mapAcessosPorDia.forEach(valor => {
            console.log(
                `${valor.nome} (ID: ${valor.id}) - Data de Acessos: ${valor.total}`
            )
        })

        const rankingMap = new Map()

        mapAcessosPorDia.forEach(valor => {
            if (rankingMap.has(valor.id)){
                rankingMap.get(valor.id).total += valor.total
            } else {
                rankingMap.set(valor.id, {
                    id: valor.id,
                    nome: valor.nome,
                    total: valor.total
                })
            }
        })

        const rankingArray = Array.from(rankingMap.values())
        rankingArray.sort((a, b) => b.total - a.total)
        console.log('---------------------------------------------------------------------')
        console.log('Ranking de acesso dos usuários por total de acessos: ')
    
        rankingArray.forEach((usuario, index) => {
            console.log(
                 `${index + 1}º Lugar: ${usuario.nome} (ID: ${usuario.id}) - Total de Acessos: ${usuario.total}`
        )
    })

    console.log('-----------------------------------------------------------------------')
