//essa forma de declarar função e chamada function declaration
// function sum(a, b){
//     return a + b
// }
// console.log(sum(2, 2)) // 2, 2 sao parametros, 

//essa forma de declarar função e chamada function expression
const sum = function(a, b){
    return a + b
}

const subtract = function(a, b){
    return a - b
}

const calculator = function (fn) {
    return function (a, b) {
        return fn(a, b)
    }
}
console.log(calculator(sum)(2, 2))
console.log(calculator(subtract)(2, 2))
// console.log(sum(2, 2))
// console.log(subtract(2, 2))

