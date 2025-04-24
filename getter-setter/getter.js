/* As funções do tipo de getter e setter servem para interceptar o acesso as propriedades de um 
determinado objeto
*/

const square = {
    x: 10,
    y: 2,
    get area(){
        return this.x * this.y
    }
}
console.log(rectangle.area)

