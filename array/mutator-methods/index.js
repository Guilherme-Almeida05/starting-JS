/*

Push: Adiciona um elemento no final
Pop: Remove um elemento no final
Unshift: Adiciona um elemento no inicio
Shift: Remove um elemento do inicio
Splice: Remove, substitui ou adiciona um ou mais elementos em uma determinada posicao
Sort: Ordena os elementos de acordo com a funcao de ordenacao
Reverse: Inverte a ordem dos elementos 
Fill: Preenche os elementos de acordo com a posicao de inicio e fim

*/

const languages = ["Python", "C", "Java"]
console.log(languages)
console.log(languages.push("Ruby")) //retorna o lenght do array
console.log(languages.push("Go")) //retorna o lenght do array
console.log(languages)
console.log(languages.pop()) //retorna o lenght do array
console.log(languages.pop()) //retorna o lenght do array
console.log(languages)
console.log(languages.unshift("Ruby"))
console.log(languages.unshift("Go"))
console.log(languages)
console.log(languages.shift("Ruby"))
console.log(languages.shift("Go"))
console.log(languages)
console.log(languages.splice(1, 1))
console.log(languages.splice(1, 0, "C++", "C#")) // Na posicao do 0 nos estamos "excluindo 0" ou seja estamos apenas inserindo
console.log(languages.splice(1, 2, "C")) // estamos fazendo o seguinte: Na posicao 1 irei apagar 2 elementos 
console.log(languages)
languages.reverse()
console.log(languages)
languages.fill("JS")
languages.fill("JS")
console.log(languages)