const sum = function (a = 1, b = 1) { // o valor 1 em ambos ira atuar caso os valores sejam undefined
    return a + b
}
console.log(sum(2, 2))
console.log(sum(5)) // nesse caso a operação foi 5 + undefined
console.log(sum(1, 2, 3)) // nesse caso o 3 foi ignorado
console.log(sum())

const sum2 = function(){
    let total = 0
    for(let argument in arguments){
        total += arguments[argument]
    } // += --> fazendo atribuicao junto com a soma
    return total
}
console.log(sum2(1, 2, 3, 4, 5, 6, 7, 8, 9))