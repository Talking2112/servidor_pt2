const express = require('express')
const PORTA = 8000

//Inicializar o servidor.
const server = express()
server.use(express.json())

//Criar uma rota simples.
server.options('/', (req,res)=>{
    res.status(200).json({msg:"Tudo bem"})
})

server.get('/tarefa', (req, res) => {
    fstat.readFile('./banco.json', 'utf-8', (err, data) => {
        if(err){
            res.status(500).json({erro:err})
        }
        res.status(200).json(JSON.parse(data))
    })
})

//Listar uma tarefa especifica, caso nao existir, retornar 404
server.get('/tarefa/id:id', (req, res) => {
    const tarefa_id = req.params.id
    let msg = {msg: 'Ok'}
    let code_err = 200
    //Ler o arquivo banco.json
    fs.readFile('./banco.json', 'utf-8', (err, data) => {
        if(err){
            res.status(500).json({erro:err})
        }
        const lista_de_tarefas = JSON.parse(data)
        const tarefa = lista_de_tarefas.find((item) => item.id == tarefa_id)
        if(!tarefa){
            code_err = 404
            msg = 'Tarefa não encontrada.'
        }
        res.status(code_err).json(msg)
    })
    //Procurar pela tarefa de ID informado (.find)
    //Retornar 404 caso não ache
    //Retornar 200 e os dados da tarefa caso ache
})

//Criar uma tarefa
server.post('/tarefa', (req, res) => {
    const{titulo, descricao, difilculdade, user_id} = req.body
    if(err){
        res.status(500).json({erro:err})
    }
    const lista_de_tarefas = JSON.parse(data)
    lista_de_tarefas.push({
        id : Date.now(),
        titulo : titulo,
        descricao : descricao,
        difilculdade : difilculdade,
        user_id : user_id
    })
    fs.writeFile('./banco.json', lista_de_tarefas, (err) => {
        if(err){
            res.status(500).json({msg:err})
        }
    })

    res.status(200).json(JSON.parse(data))
})
    //Pegar as informações da nova tarefa, do body da requisição
    //lendo meu arquivo (readFile)
    //inserir a nova tarefa, no arquivo
    //salvar o arquivo (writeFire, appendFile)

//Criar uma CRUD em arquivo json utilizando RestFul


//Mandar o servidor ouvir na porta 8000.
server.listen(PORTA, ()=> {console.log("Servidor rodando na porta 8000.")})