function fn1(){
    const v1 = 10
    return function (){
        console.log(v1)
    }
}  // Uma funcao retornando outra funcao
const fn2 = fn1()
const v1 = 100
fn2()
/*closure e uma funcao com um scope chain estatitico que e definido no momento em que a funcao e criada 
por isso todas as funcoes na linguagem JS sao closures 
*/