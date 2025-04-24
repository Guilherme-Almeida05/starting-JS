const calculateArea = function(fn){
    return fn(Math.PI * Math.pow(this.radius, 2))
}
const circle = {
    radius: 10,
    calculateArea
}
console.log(calculateArea.call(circle, Math.round)) // Podemos usar o apply no lugar do call para executar o mesmo
console.log(calculateArea.apply(circle, [Math.ceil])) 
// Observa-se que a forma como passamos os parametros é oque diferencia o call e o apply
