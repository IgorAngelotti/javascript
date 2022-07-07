function calcular(){
    var num = document.getElementById('numero')
    var cont = 0
    var res = document.getElementById('res')
    res.innerHTML = '' 
    if (num.value.length == 0){
        res.innerHTML = 'É preciso informar um número!!'
    } else {
    var tabuada = Number(num.value)
    res.innerHTML = `Tabuada do ${tabuada}:`
    while (cont <=10){
        var mult = tabuada * cont 
        res.innerHTML += `<br>${tabuada} X ${cont} = ${mult} `
        cont ++
    }
    }
}