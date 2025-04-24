// ARROW FUNCTIONS --> tem uma abordagem mais simples e direta para escrever uma função e podem melhorar a legibilidade do codgio em diversas situaçoes

// const sum = (a, b) => {
//     return a + b
// }
// const subtract = (a, b) => {
//     return a - b
// }
// const calculator = (fn) => {
//     return (a, b) => {
//         return fn(a, b)
//     }
// }

const sum = (a, b) => a + b
const subtract = (a, b) => a - b
const calculator = (fn) => (a, b) => (a, b) => fn(a, b)
console.log(calculator(sum)(2, 2))
console.log(calculator(subtract)(2, 2))

// Arrow functions n possuem sua proprias variaveis 'this' e 'arguments'