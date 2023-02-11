//Recursividade
function fatorial(n){
    if (n == 1) {
        return 1
    } else {
        return n * fatorial(n - 1) // chamando a função dentro da função.
    }
}

console.log(fatorial(5)) // que é igual a 120
// n! = n x (n-1)!