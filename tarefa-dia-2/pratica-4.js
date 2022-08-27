
let produtoA = {
    nome: "camiseta", 
    valor: 100.00, 
    internacional: true
};
let produtoB = {
    nome: "perfume",
    valor: 200.00,
    internacional: true
};
let produtoC = {
    nome: "sandália",
    valor: 120.00,
    internacional: false
};

if (produtoA.internacional == true) {
    produtoA.valor = produtoA.valor * 1.2
    console.log(`O produto ${produtoA.nome} é importado e seu valor final é de ${produtoA.valor} reais`)
} else {
    produtoA.valor = produtoA.valor * 1.12
    console.log(`O produto ${produtoA.nome} é nacional e seu valor final é de ${produtoA.valor.toFixed(2)} reais`)
}

if (produtoB.internacional == true) {
    produtoB.valor = produtoB.valor * 1.2
    console.log(`O produto ${produtoB.nome} é importado e seu valor final é de ${produtoB.valor} reais`)
} else {
    produtoB.valor = produtoB.valor * 1.12
    console.log(`O produto ${produtoB.nome} é nacional e seu valor final é de ${produtoB.valor.toFixed(2)} reais`)
}

if (produtoC.internacional == true) {
    produtoC.valor = produtoC.valor * 1.2
    console.log(`O produto ${produtoC.nome} é importado e seu valor final é de ${produtoC.valor} reais`)
} else {
    produtoC.valor = produtoC.valor * 1.12
    console.log(`O produto ${produtoC.nome} é nacional e seu valor final é de ${produtoC.valor.toFixed(2)} reais`)
}