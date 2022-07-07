function contar(){
    var inicio = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var cont = document.getElementById('txtp')
    var res = document.getElementById('res')
    var c = 1
    if(inicio.value.length == 0 || fim.value.length == 0 || cont.value.length == 0){
        res.innerHTML = 'Você precisa preencher todos os campos!'
    }else if (cont.value <= 0){
        res.innerHTML = 'O passo não ser 0 ou menor que 0. Tente novamente.'
    }else{
        res.innerHTML = 'Contando: <br>'
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(cont.value)
        if (i < f){
            //CONTAGEM CRESCENTE
            while (i <= f){
                res.innerHTML += `${i} \u{1f449}`
                i += p 
            }
        }else {
            //CONTAGEM REGRESSIVA
            while (i >= f){
                res.innerHTML += `${i} \u{1f449} `
                i -= p
            }   
        }
        res.innerHTML += `\u{1f3c1}`
    }
}


/*
    EXEMPLO DE UM CARA PARA ECONIMIZAR LINHAS

Eu fiz assim para economizar linhas, realizei o Number() antes de realizar o document...():


var inicio = Number(document.getElementById('cInicio').value)
    var fim = Number(document.getElementById('cFim').value)
    var passo = Number(document.getElementById('cPasso').value)
    var saida = document.getElementById('saida')

    if (inicio == 0 || fim == 0 || passo == 0) {
//Aqui validei com a propria variavel que se for 0 da no mesmo que o "lenght".
        saida.innerHTML = `Impossível contar!`
        window.alert('ERRO, faltam dados!')
    } else {
    saida.innerHTML = 'Contando: <br>'
   

    if(inicio < fim){
        //Contagem crescente
    for(let c = inicio; c <= fim; c += passo){
        saida.innerHTML += `${c} \u{1F449}`           
   }
}
    else{
        //Contagem regressiva
        for(let c = inicio; c >= fim; c = c - passo){
            saida.innerHTML += `${c} \u{1F449}`
        }
    }
    saida.innerHTML += `\u{1F3C1}`
}
}

*/
