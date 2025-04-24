// As classes sao um tipo especial de funcao que atuam como um template para criacao de objetos

/*

As classes sao formadas por 3 tipos de membros 

constructor: invocado no momento da instanciacao de uma classe e serve para inicializar um determinado objeto
prototype:
methods:
static methods:

*/


class Square {

}
console.log(Square)
console.log(typeof Square)

//INSTANCIANDO A CLASSE (TORNANDO ELA EM UM OBJETO)

const Square2 = class {
    
}
const square = new Square
console.log(square)

// As classes nao sofrem hoistin, nao importando a forma como foram declaradas 