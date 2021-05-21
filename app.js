const express = require('express')
var send = require('./send');
const path = require('path');
const app = express()
const port = 3000

app.use(express.urlencoded({
  extended: true
}))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
})

app.post('/posting', (req, res) => {
  console.log(req.body)
  console.log('dsa')
  res.send('dsass    ', req.body)
})


app.listen(process.env.PORT || 5000)