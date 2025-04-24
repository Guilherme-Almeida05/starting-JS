const ooLanguages = ["Smalltalk", "C++", "Simula"]
const funcionalLanguages = ["Haskell", "Scheme"]
const languages = [].concat(ooLanguages, funcionalLanguages) // concatenando um array vazio com os outros dois arrays
console.log(languages)
console.log(ooLanguages.slice(0, 2)) // slice so retorna os elementos da posicao n-1 
console.log(ooLanguages.slice(1)) // nesse caso sera do elemento correspodente ate o final do array 