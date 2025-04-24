// OPERADORES ARITIMÉTICOS  + - / * **

// % usado para saber o resto de uma divisao

/*
Ordem de precedência dos operadores 

()
**
* / %
+ -

*/

const num1 = 5
const num2 = 10
console.log(num1 + num2) // Com o sinal de soma podemos somar ou concatenar valores

const num3 = 5
const num4 = 10
console.log(num3 - num4)

const num5 = 5
const num6 = 10
console.log(num6 / num5)

const num7 = 5
const num8 = 10
console.log(num7 * num8)

const num9 = 2
const num10 = 10
console.log(num9 ** num10)

let contador = 1 // OBS: não podemos usar const na variavel, pois n podemos alterar o valor da constante
contador++//2
contador++//3
contador++//4
contador++//5
console.log(contador)


// OPERADORES DE ATRIBUICAO
let result = 10
result += 2
result -= 5
result *= 8
result /= 2
result %= 6

// OPERADORES DE INCREMENTO E DECREMENTO
let result2 = 10
result++
++result
result--
--result

// OPERADORES BINARIOS 
4 | 3
3 & 1
5 ^ 2
~2
4 << 2
128 >> 1
-2 >>> 1

parseInt("9.9",10)