/*
Sao convenções implementadas por arrays, Maps, Sets e Strings que os tornam iteraveis por meio
de um protocolo de iteração
*/

const classicLanguages = ["Fortran", "lisp", "COBOL"]
const mordenLanguages = ["Python", "Ruby", "JS"]
const languages = [ ...classicLanguages, ...mordenLanguages]
console.log(languages)