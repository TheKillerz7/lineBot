const express = require('express')
var send = require('./send');
const path = require('path');
const request = require('request-promise')
const app = express()
const port = 3000

app.use(express.urlencoded({
  extended: true
}))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
})

app.post('/posting', (req, res) => {
  reply(req.body, { type: "text", text: "dsa" })
})

const reply = (rt, payload) => {
  request.post('https://api.line.me/v2/bot/message/reply', {
      headers: {
          "Content-Type" : "application/json",
          Authorization: `Bearer qqYlHyvoss/pGBbV5XNerp2bbWgsTMt/s9xwYdvJWl1MvcPv3cwQWE+EJTTLZ7oU+hkLxVqe3M0W8K2y4XAnMHsg4rL2w77r+7pIb4oYOCPWQ14ShDzHSCca+i7+Gfuxn1uonvsQv184Lbi7ErWRMAdB04t89/1O/w1cDnyilFU=`
      },
      body: JSON.stringify({
          replyToken: rt.events[0].replyToken,
          messages: [payload]
      })
  })
}


app.listen(process.env.PORT || 5000)