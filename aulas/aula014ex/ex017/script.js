var botao = document.getElementById('botao')
botao.addEventListener('click', calcular)
function calcular(){
    var num = document.getElementById('numero')
    var cont = 0
    var flista = document.getElementById('lista')
    flista.innerHTML = ''
    if (num.value.length == 0){
        res.innerHTML = 'É preciso informar um número!!'
    } else {
    var tabuada = Number(num.value)
    while (cont <=10){
        var item = document.createElement('option')
        var mult = tabuada * cont 
        item.text = `${tabuada} X ${cont} = ${mult} `
        flista.appendChild(item)
        cont ++
    }
    }
}