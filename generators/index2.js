// Os generators utilizam o metodo next para iterar sobre os valores disponiveis durante a execucao da funcao

// Ao encontrar um yield, a execucao da funcao e pausada ate o metodo next ser invocado novamente 

// O retorno do metodo next e um objeto contendo value e done, seguindo o protocolo de iteracao

// Por meio do yield e possivel retornar valores de forma similar ao return 

function* forever() {
    let value = 1
    while (true) {
        yield value++
    }
}

function today() {
    const date = new Date()
    console.log(date)
}

const foreverGenerator = forever()
console.log(foreverGenerator.next())
console.log(foreverGenerator.next())
console.log(foreverGenerator.next())
console.log(foreverGenerator.next())
today()
console.log(foreverGenerator.next())
console.log(foreverGenerator.next())
