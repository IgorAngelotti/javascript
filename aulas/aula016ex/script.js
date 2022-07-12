var num = document.getElementById('fnum')
var lista = document.getElementById('flista')
var res = document.getElementById('res')
var valores = []
var item = document.createElement('option')

function isNumero(n){
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else{
        return false
    }
}

function inLista(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    } else{
        return false
    }
}

function adicionar(){
   if (isNumero(num.value) && !inLista(num.value, valores)){
        
    //USAR O DO... WHILE
        
        var numero = Number(num.value)
        valores.push(numero)
        let item = document.createElement('option')
        item.text = `Valor ${numero} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
   } else {
        window.alert('Valor inválido ou já encontrado na lista')
   }
   num.value = ''
   num.focus()
}

function finalizar (){
    var soma = 0
    var ultimo = valores.length
    valores.sort(( a, b ) => a - b)
    var mnum = valores[0]
    var Mnum = valores[ultimo-1]
    for (cont = 0; cont < valores.length; cont++){
        soma += valores[cont]
    }
    var media = soma/valores.length
    res.innerHTML = ''
    if (valores.length == 0){
        window.alert('Adicione algum número antes de finalizar')
    } else if (valores.length == 1){
        res.innerHTML += `<p> Ao todo, temos 1 único número cadastrado. Para mais dados, informe, no mínimo, dois números.</p>`
    } else{
    res.innerHTML += `<p> Ao todo, temos ${valores.length} números cadastrados</p>`
    res.innerHTML += `<p> O menor valor foi ${mnum}</p>`
    res.innerHTML += `<p> O maior valor foi ${Mnum} </p>`
    res.innerHTML += `<p> A soma entre todos os valores digitados foi ${soma}`
    res.innerHTML += `<p> A media dos valores digitados é ${media.toFixed(2)}`
    }
    

}
    // valor = Number(num.value)
    // item.text = `Valor ${valor} adicionado`
    // cont.push(valor)
    // lista.appendChild(item)
    // var p = document.getElementById('p')
    
