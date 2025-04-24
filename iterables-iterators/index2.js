// PROTOCOLO DE INTERACAO

const languages = ["fortran", "lisp", "COBOL"]
const iterator = languages[Symbol.iterator]()
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())

