let num = [7, 5, 9, 3, 4, 0]
num.push(6) //CRIA MAIS UMA CHAVE (A ULTIMA, QUE NESSE EXEMPLO SERIA A CHAVE 6) COM O VALOR = "6"
num[7] = 8 //CRIA A CHAVE 7, COLOCANDO NELA O VALOR = "8"
// num.length -- >QUANTOS ELEMENTOS O VETOR POSSUI 
// num.sort() --> VAI ORDENAR EM ORDEM CRESCENTE OS ELEMENTOS
var tamanho = num.length
console.log(num)
console.log(`O vetor tem ${num.length} elementos, sendo o primeiro valor ${num[0]} e o ultimo ${num[num.length - 1]}.`)
console.log(`O vetor em ordem crescente fica: ${num.sort()} `)
console.log()

/*
 for (var cont = 0; cont < num.length; cont ++){
    console.log(`A posição ${cont} tem o valor ${num[cont]}`)
}
console.log()
*/

for(var cont in num ){
    console.log(`A posição ${cont} tem o valor ${num[cont]}`)
}
console.log()