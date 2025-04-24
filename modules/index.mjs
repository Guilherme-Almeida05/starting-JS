// No es6, foi especificado na propria linguagem, baseado no conceito de importacao e exportacao

// Por meio da palavra chave export e possivel exportar qualquer tipo de dado existente dentro de um modulo

// A palavra chave import faz a importacao de qualquer tipo de dado exportado para dentro do modulo

import {PI as pi , pow} from './math.mjs' // usando "as" para criar um "alias"
class Circle {
    constructor(radius) {
        this.radius = radius
    }

    get area() {
        return pi * pow(this.radius, 2)
    }
}
const circle = new Circle(10)
console.log(circle)
console.log(circle.area)
