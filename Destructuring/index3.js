// E possivel definir nomes difererntes para as variaveis em relacao as chaves das propriedades do  objeto 
const language = {
    name: "c",
    author:"Dennis",
    year: 1972,
    company: {
        name:"bell labs"
    }
}
const {name: n, author: a, year: y, company:{name: c}} = language // criando uma variavel que recebe o valor da propriedade de chave
console.log(n, a, y, c)