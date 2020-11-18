
const express = require('express')
const app = express()
const port = 3000
let users =[];
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/users', (req, res) => {
	var arr = [];
  res.send(arr)

})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
