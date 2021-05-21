const request = require('request-promise')

const send = (req, res) =>{
    reply(req.body.events[0].replyToken, { type: "text", text: "dsa" })
}

const reply = (rt, payload) => {
    request.post({
        url: "https://api.line.me/v2/bot/message/reply",
        headers: {
            "Content-Type" : "application/json",
            Authorization: `Bearer 
            qqYlHyvoss/pGBbV5XNerp2bbWgsTMt/s9xwYdvJWl1MvcPv3cwQWE+EJTTLZ7oU+hkLxVqe3M0W8K2y4XAnMHsg4rL2w77r+7pIb4oYOCPWQ14ShDzHSCca+i7+Gfuxn1uonvsQv184Lbi7ErWRMAdB04t89/1O/w1cDnyilFU=`

        },
        body: JSON.stringify({
            replyToken: rt,
            messages: [payload]
        })
    })
}

module.exports = send