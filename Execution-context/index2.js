const obj1 = {
    p1: 10,
    getP1: function (){
        const that = this // pegando o 'this' e guardando na variavel 'that'
        const fn1 = function (){
            return that.p1
            
        }
        return fn1()
    }
}
console.log(obj1.getP1())

// PODEMOS USAR A ARROW FUNCTION PARA NOS AJUDAR COM O PROBLEMA ACIMA
/*
const obj1 = {
    p1: 10,
    getP1: function (){
        const fn1 = () => {
            return this.p1
            
        }
        return fn1()
    }
}
console.log(obj1.getP1())
*/