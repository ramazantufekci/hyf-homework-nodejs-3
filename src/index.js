
const express = require('express')
const app = express()
const port = 3000
let users =[];
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/users', (req, res) => {
        res.send(users)
})

app.post('/user', (req, res) => {
        var obj = {id: 0};
        users.push(obj);
  res.send(users)
})

app.get('/user/:id', (req, res) => {
  res.send({id: parseInt(req.params.id)})
})

app.delete('/user/:id', (req, res) => {
  res.status(202).send({id: parseInt(req.params.id)})
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
