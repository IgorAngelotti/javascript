var sei = [1, 9, 9084]
sei.push(5)
sei.push(0)
sei.push(4)
var soma = 0
var Mnum = 0
var mnum = sei[0]

for (cont = 0; cont < sei.length ; cont++ ){
    if (sei[cont] > Mnum){
        Mnum = sei[cont]
    } else if (sei[cont] < mnum){
            mnum = sei[cont]
    }
    soma += sei[cont]
}

console.log(`Foram digitados os elementos ${sei}`)
console.log(`A soma é de ${soma}`)
console.log(`O maior valor foi ${Mnum}`)
console.log(`O menor valor foi ${mnum}`)