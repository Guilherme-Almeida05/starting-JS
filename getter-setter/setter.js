const rectangle = {
    set x(x){
        if (x > 0) {// Se x for maior que zero, farei a atribuição abaixo
            this._x = x
        } else {
            console.log("Invalid value for x")
        }
    },
    set y(y){
        if (y > 0){
        this._y = y
        } else {
            console.log("Invalid value for y")
        }
    },
    get area(){
        return this._x * this._y
    }
}
rectangle.x = 10
rectangle.y = 2
console.log(rectangle.area) 

// Para setter devemos usar chaves diferentes para a função e a propriedade