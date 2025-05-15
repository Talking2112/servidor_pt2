const http = require('http')

const PORTA = 8000

const server = http.createServer(   (req, res) => {
    const {pathname, query} = url.parse(req.url)
    console.log(pathname)
    console.log(query)
    const rota = req.url
    if(rota === '/soma'){
        const resultado = soma(1,2)
        res.end(`o resultado da soma é ${resultado}`)
    }else if(rota === '/subtrair'){
        const resultado = subtrair(1,2)
        res.end(`o resultado da subtração é ${resultado}`)
    }else if(rota === '/multiplicar'){
        const resultado = multiplicar(1,2)
        res.end(`o resultado da multiplicação é ${resultado}`)
    }else if(rota === '/dividir'){
        const resultado = dividir(1,2)
        res.end(`o resultado da divizão é ${resultado}`)
    }else{
        res.statusCode(404).end('Não definido')
    }
})

server.listen(PORTA, () => {
    console.log(`O servidor está na porta ${PORTA}`)
})

function soma(num1, num2) {
    return num1 + num2
}
function subtrair(num1, num2) {
    return num1 - num2
}
function multiplicar(num1, num2) {
    return num1 * num2
}
function dividir(num1, num2) {
    return num1 % num2
}