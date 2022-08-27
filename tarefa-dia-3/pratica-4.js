//crie um código que dado número n o console mostre se o n é primo ou não

let n = 21
let verificacao1 = n % 2
let verificacao2 = n % 3
let verificacao3 = n % 5
let verificacao4 = verificacao1 <=2
let nPrimos = [2, 3, 5]

if (n == 1) {
    console.log(`${n} não é número primo`)
}   else if (nPrimos.includes(n) == true) {
    console.log(`${n} é número primo`)
}   else if (verificacao1 == 0) {
    console.log(`${n} não é número primo`)
}   else if (verificacao2 == 0) {
    console.log(`${n} não é número primo`)
}   else if (verificacao3 == 0) {
    console.log(`${n} não é número primo`)
}   else if (verificacao4 == true) {
    console.log(`${n} é número primo`)
}