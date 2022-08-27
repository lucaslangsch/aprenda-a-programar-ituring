//crie um programa que dado um conjunto 1 até n, sendo o n dado pelo usuário, mostre no terminal quais são os números ímpares

let i = 1
let n = 15

while (i <= n) {
    if (i % 2 != 0) {
        console.log(i)
    }
    i++
}

//solução usando mais variáveis e tipos boolean

let j = 1
let m = 15

while (j <= m) {
    let modulo = j % 2
    if (modulo == false) {
    } else {
        console.log(j)
    }
    j++
}