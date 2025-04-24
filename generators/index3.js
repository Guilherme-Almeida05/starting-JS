// Alem disso, tambem e possivel enviar um valor para dentro do generator por meio do metodo next

// O metodo return encerra o generator podendo retornar um valor especifico

// O metodo throw lanca uma execucao dentro do generator interrompendo o fluxo de execucao caso a excecao nao tenha sido tratada 

function* forever() {
    let value = 1
    while (true) { 
        try {
        const reset = yield value++
        if (reset) value = 1 
        } catch(e){
            console.log(e)
        }
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
console.log(foreverGenerator.throw("error"))
console.log(foreverGenerator.next(true))
console.log(foreverGenerator.next())