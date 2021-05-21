const express = require('express')
var send = require('./send');
const path = require('path');
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
})

app.post('/posting', send)


app.listen(process.env.PORT || 5000)