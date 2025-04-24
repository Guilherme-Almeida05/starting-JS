// Com o "destructuring" podemos extrair valores de arrays e ibjetos de forma mais facil

const languege = "C; Dennis Ritchie; 1972".split (";")
const name = languege[0]
const author = languege[1]
const year = languege[2] // Atribuindo cada elemento a uma variavel
console.log(name, author, year)

// E possivel extrair valores de um array criando variaveis em ordem, de acordo com a posicao de cada elemento

const [name1, author1, year1] = "C;Dennis Ritchie;1972".split (";")
console.log(author1, year1)

// Assim como nas funcoes, e possivel definir valores padrao para cada uma das variaveis 

const language = "C;Dennis".split(";")
const [name2= "-",author2= "-", year2= "-"] = language
console.log(name2, author2, year2) // mostrando valores default

