
const express = require('express')
require('dotenv').config()
const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/hi', (req, res) => {
    res.send('Hibro1')
})
app.get('/youtube', (req, res) => {
    res.send('<h2>Youtube</h2>')
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})