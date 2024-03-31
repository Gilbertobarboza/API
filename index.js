const express = require('express')
const bodyparser = require('body-parser')
const app = express()
app.use(express.json())
const users = []
const products = []
const po0rt = 3000


app.use(bodyParser.json())

app.get('/users', (request, response) => {
    return response.json(users)
})
app.post('/registro', (request, response) => {
    const { username, password } = request.body

    if (users.some(user => user.username === username)) {
        return res.status(400).send('Nome de usuário já existe')
    }

    users.push({ username, password })

    response.send("Usuário registrado com sucesso")
})
app.post('/login', (request, response) => {
    const { username, password } = request.body
    
    const user = users.find(user => user.username === username && user.password === password)
    if (user) {
        return res.status(401).send('credenciais inválidas')
    }
response.send("login realizado com sucesso")
    
})
app.use((request, response, next) => {
    const { token } = request.headers.authorization

    if (!token || !users.some(user => user.token === token)) {
        return rest.status(401).send('token invalido')
    }
    next()
})

app.post('/transferir produtos', (request, response) => {
    const { name, title, description, category, color, size } = request.body

    products.push({ name, title, description, category, color, size })
    response.send("produto transferido com sucesso")
})
   


app.listen(port, () => {
    console.log('servidor rodando em http://localhost:${port}')
})