class Shape {
    toString() {
        return `area: ${this.calculateArea()}`
    }
}

class Square extends Shape {
    constructor(side) {
        super()
        this.side = side
    }

    calculateArea() {
        return Math.pow(this.side, 2)
    }

    toString() {
        return `side: ${this.side} ${super.toString()}`
    }

    static fromArea(area) {
        return new Square(Math.sqrt(area))
    }
}
const square = Square.fromArea(16)
console.log(square.toString())
console.log(square.calculateArea())

class Circle extends Shape {
    constructor(radius) {
        super()
        this.radius = radius
    }

    calculateArea() {
        return Math.PI * Math.pow(this.radius, 2)
    }

    toString() {
        return `radius:${this.radius} ${super.toString()}`
    }

    static fromArea(area) {
        return new Circle(Math.sqrt(area / Math.PI))
    }
}
const circle = Circle.fromArea(314.1592653589793)
console.log(circle.toString())
console.log(circle.calculateArea())

// E POSSIVEL CRIAR UMA HIERARQUIA DE CLASSES POR MEIO DA PALAVRA CHAVE "EXTENDS"

// AO DECLARAR UM CONSTRUTOR NA SUBCLASSE E NECESSARIO INVOCAR O CONSTRUTOR DA SUPERCLASS POR MEIO SUPER() ANTES DE UTILIZAR A REFERENCIA THIS