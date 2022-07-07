function calcular(){
    var num = Number(document.getElementById('numero').value)
    var cont = 0
    var res = document.getElementById('res')
    res.innerHTML = ''
    res.innerHTML = `Tabuada do ${num}:` 
    while (cont <=10){
        var mult = num * cont 
        res.innerHTML += `<br>${num} X ${cont} = ${mult} `
        cont ++
    }


}