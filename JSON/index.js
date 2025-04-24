// JSON --> Formato de intercambio de dados 
JSON.stringify(10)
JSON.stringify("JS")
JSON.stringify(true)
JSON.stringify(false)
JSON.stringify({name:"Self", paradigm: "OO"}) //passando um objeto
JSON.stringify([1,2,3,4,5,6,7,8,9])
JSON.stringify(null)

//JSON --> converte um JSON para um determinado tipo de dado

JSON.parse('10') // Ao lançar no terminal esses dados, realizaremos o caminho inverso chegando oque esta em cima
JSON.parse('"JS"')
JSON.parse('true')
JSON.parse('false')
JSON.parse('{"name":"Self", "paradigm": "OO"}') 
JSON.parse('[1,2,3,4,5,6,7,8,9]')
JSON.parse('null')