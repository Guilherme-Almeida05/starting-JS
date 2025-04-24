/*
Os GENERATORS tornam possivel pausar a execucao de uma determinada funcao permitindo a utilizacao do 
event loop de forma cooperativa  
*/


function* forever() {
    let value = 1
    while (true) {
        console.log(value++)
    }
}

function today() {
    const date = new Date()
    console.log(date)
}

const foreverGenerator = forever()
console.log(foreverGenerator)
console.log(typeof foreverGenerator)
console.log(Object.getOwnPropertyNames(foreverGenerator.__proto__.__proto__))
today()