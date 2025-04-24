// Map é um objeto que armazena um conjunto de chaves e valores que podem ser de qualquer tipo de dado

/*

size: Retorna a quantidade de elementos 
set: Adiciona um par de chave e valor
forEach: Itera sobre o mapa
has: Retorna true se a chave existir 
get: Retorna o valor de uma determinada chave 
delete: Remova um par de chave e valor
clear: Remove todos os elementos 

*/

const timeUnets = new Map([["second", 1], ["minute", 60], ["hour", 3600]])
timeUnets.set("add", 1)
timeUnets.forEach(function(value, key){
    console.log(key, value)
})
timeUnets.delete("hour")
console.log(timeUnets.has("hour"))
console.log(timeUnets.has("day"))
console.log(timeUnets.get("second"))
console.log(timeUnets.get("minute"))
console.log(timeUnets.get("hour"))
console.log(timeUnets.get("day"))
console.log(timeUnets)
console.log(timeUnets.size)
timeUnets.clear()
console.log(timeUnets.size)


