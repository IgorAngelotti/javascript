function fatorial(n){
    let fat = 1
    for (var c = n; c > 1; c--){
        fat *= c
    }
    return fat
}

console.log(fatorial(5)) 

/*
 for (var c = n; c  fat; c--){
        n = n*c
    }
    return n
*/