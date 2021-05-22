const express = require('express')
const line = require('@line/bot-sdk');
const request = require('request-promise')
const app = express()


//config for line middleware
const config = {
  channelAccessToken: 'qqYlHyvoss/pGBbV5XNerp2bbWgsTMt/s9xwYdvJWl1MvcPv3cwQWE+EJTTLZ7oU+hkLxVqe3M0W8K2y4XAnMHsg4rL2w77r+7pIb4oYOCPWQ14ShDzHSCca+i7+Gfuxn1uonvsQv184Lbi7ErWRMAdB04t89/1O/w1cDnyilFU=',
  channelSecret: '6b618a4854126019742503a67d11e0d4'
};

app.use(express.urlencoded({
  extended: true
}))


//reply user
app.post('/posting', line.middleware(config),  (req, res) => {
  request.post('https://api.line.me/v2/bot/message/reply', {
      headers: {
          "Content-Type" : "application/json",
          Authorization: `Bearer qqYlHyvoss/pGBbV5XNerp2bbWgsTMt/s9xwYdvJWl1MvcPv3cwQWE+EJTTLZ7oU+hkLxVqe3M0W8K2y4XAnMHsg4rL2w77r+7pIb4oYOCPWQ14ShDzHSCca+i7+Gfuxn1uonvsQv184Lbi7ErWRMAdB04t89/1O/w1cDnyilFU=`
      },
      body: JSON.stringify({
          replyToken: req.body.events[0].replyToken,
          messages: [{
            type: 'text',
            text: 'Hello World!'
          }]
      })
  })
})

//get followers ids
// const ids = request.post({
//   url: "https://api.line.me/v2/bot/followers/ids",
//   headers: {
//       Authorization: `Bearer qqYlHyvoss/pGBbV5XNerp2bbWgsTMt/s9xwYdvJWl1MvcPv3cwQWE+EJTTLZ7oU+hkLxVqe3M0W8K2y4XAnMHsg4rL2w77r+7pIb4oYOCPWQ14ShDzHSCca+i7+Gfuxn1uonvsQv184Lbi7ErWRMAdB04t89/1O/w1cDnyilFU=`
//   }
// })

//push message
// request.post({
//   url: "https://api.line.me/v2/bot/message/push",
//   headers: {
//       "Content-Type" : "application/json",
//       Authorization: `Bearer qqYlHyvoss/pGBbV5XNerp2bbWgsTMt/s9xwYdvJWl1MvcPv3cwQWE+EJTTLZ7oU+hkLxVqe3M0W8K2y4XAnMHsg4rL2w77r+7pIb4oYOCPWQ14ShDzHSCca+i7+Gfuxn1uonvsQv184Lbi7ErWRMAdB04t89/1O/w1cDnyilFU=`

//   },
//   body: JSON.stringify({
//       to: 'Uf6a475f2e75abee2a91d043da265705d',
//       messages: [payload]
//   })
// })


app.listen(process.env.PORT || 5000)
