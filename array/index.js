// Um ARRAY e apenas um objeto que oferece operacoes para acessar e manipular suas propriedades 

// Array de linguagens 
const language = ["Python", "C", "Java"]
console.log(language)

// a propriedade 'length 'indica a aquantidade de elementos dentro do array
const languages = []
languages [0] = "Python"
languages [1] = "C"
languages [2] = "Java"
console.log(languages)
console.log(languages.length) // os elementos vazios dentro do array nao sao considerados no length
delete languages [1]
console.log(languages)
console.log(languages.length)