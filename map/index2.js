/* 

QUAL A DIFERENCA DE UM MAP PARA UM OBJETO: Umas das principais diferencas e que 

*/

const obj = {} // As chaves no object são string
obj[10] = "Number"
obj["10"] = "String"
obj[true] = "Boolean"
obj["true"] = "String"
console.log(obj[10])
console.log(obj["10"])
console.log(obj[true])
console.log(obj["true"])


const map = new Map()
map.set(10, "Number")
map.set("10", "String")
map.set(true, "Boolean")
map.set("true", "String")
console.log(map.get(10))
console.log(map.get("10"))
console.log(map.get(true))
console.log(map.get("true"))