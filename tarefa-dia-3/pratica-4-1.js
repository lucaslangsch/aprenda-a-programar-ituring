//MODIFICAÇÃO QUE ACHEI INTERESSANTE  crie um código que dado número n o console mostre se o conjunto 1 até n é primo ou não

let i = 1
let n = 19


while (i <= n) {

    let verificacao1 = i % 2
    let verificacao2 = i % 3
    let verificacao3 = i % 5
    let verificacao4 = verificacao1 <=2
    let nPrimos = [2, 3, 5]

if (i == 1) {
    console.log(`${i} não é número primo`)
} else if (nPrimos.includes(i) == true) {
    console.log(`${i} é número primo`)
}   else if (verificacao1 == 0) {
    console.log(`${i} não é número primo`)
}   else if (verificacao2 == 0) {
    console.log(`${i} não é número primo`)
}   else if (verificacao3 == 0) {
    console.log(`${i} não é número primo`)
}   else if (verificacao4 == true) {
    console.log(`${i} é número primo`)
}   

i++
}
