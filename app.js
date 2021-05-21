const express = require('express')
var send = require('./send');
const path = require('path');
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
})

app.use('/posting', send)


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})