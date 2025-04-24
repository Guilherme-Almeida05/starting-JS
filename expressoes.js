let regExp = /^gui@gmail.com$/  // usando ^ e $ ,  delimitados onde e o inicio e fim da string
let result = regExp.exec("gui@gmail.com")
console.log(result[0])
console.log(result.index)
console.log(result.input)

/*
CONCEITO

let regExp = /gui@gmail.com/
let result = regExp.test("gui@gmail.com")
console.log(result)

--> Neste caso, como usamos o ".test" após nosso elemento, estaremos realizando uma verificação 
dos elementos, e isso retornara um valor boolean (true or false)

*/

/*

let regExp = /gui@gmail.com/
let result = regExp.exec("gui@gmail.com")

Na linha de cima o ponto e considerado um meta caracter, ou seja, caso substituamos ele por qualquer
elemento na linha de baixo, ainda estara valido, para evitar isso usamos a \ que é um caracter de
escape

*/

// GRUPOS DE CARACTERES
/*

[abc] - aceita qualquer caractere dentro do grupo, nesse caso A, B e C
[^abc] - nao aceita qualquer caractere dentro do grupo, nesse caso A, B ou C
[0-9] - aceita qualquer caractere entre 0 e 9
[^0-9] - nao aceita qualquer caractere entre 0 e 9

*/

let regExp1 = /^[a-z]{4}@gmail.com$/  //usando [a-z] nao precisamos preencher os elementos de cima 
let result1 = regExp1.exec("gui@gmail.com")  //com dos dados corretos, apenas os de baixo com a msm 
console.log(result1[0])                      // quantidade de caracteres
console.log(result1.index)
console.log(result1.input)


// QUANTIFICADORES
/*

{n} --> quantifica um numero especifico 
{n,} --> quantifica um numero minimo
{n,m} --> quantifica um numero minimo e um numero maximo
? -- > zero ou um
* --> zero ou mais
+ --> um ou mais 

*/

//META CARACTERES 
/*

\w - representa o conjunto [a-zA-Z0-9]
\W - representa o conjunto [^a-zA-Z0-9]
\d - representa o conjunto [0-9]
\D - representa o conjunto [^0-9]
\s - representa um espaco em branco 
\S - representa um nao espaco em branco 
\n - representa uma quebra de linha 
\t - representa um tab

*/