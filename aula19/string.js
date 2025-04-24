let counter = 0
console.time("performance")
while (counter < 100000) { // <-- implementando um contador de 0 ate 100000
    "JavaScript" // <-- Criando uma nova string
    counter++
}
console.timeEnd("performance")

// ESCAPE DE STRINGS

console.log("This is an example \"for\" my studies") // Usamos barra invertida para inserir outras ""

let dayOfWeek = '0 - Sunday\n1 - Monday\n2 - Tuesday\n3 - Wednesday\n4 - Thursday\n5 - Friday\n6 - Saturday'
console.log(dayOfWeek)