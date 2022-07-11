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
        window.alert('tudo ok')
   } else {
        window.alert('Valor inválido ou já encontrado na lista')
   }
   
   
   
    // valor = Number(num.value)
    // item.text = `Valor ${valor} adicionado`
    // cont.push(valor)
    // lista.appendChild(item)
    // var p = document.getElementById('p')
    
}