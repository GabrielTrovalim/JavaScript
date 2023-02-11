//Recursividade
function fatorial(n){
    if (n == 1) {
        return 1
    } else {
        return n * fatorial(n - 1) // chamando a função dentro da função.
    }
}

// n! = n x (n-1)!