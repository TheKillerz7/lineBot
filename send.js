const request = require('request-promise')
const express = require('express')
const app = express()

const send = (req, res) =>{
    res.send(getUserIds());
}

const getUserIds = () =>{
    const ids = app.get("https://api.line.me/v2/bot/followers/ids", (req, res) => {
        res.send(req)
    }
        // {
        //     headers: {
        //         Authorization: `Bearer qqYlHyvoss/pGBbV5XNerp2bbWgsTMt/s9xwYdvJWl1MvcPv3cwQWE+EJTTLZ7oU+hkLxVqe3M0W8K2y4XAnMHsg4rL2w77r+7pIb4oYOCPWQ14ShDzHSCca+i7+Gfuxn1uonvsQv184Lbi7ErWRMAdB04t89/1O/w1cDnyilFU=`
        //     },
        // }
    )
    return JSON.stringify(ids)
}

const reply = (rt, payload) => {
    request.post({
        url: "https://api.line.me/v2/bot/message/push",
        headers: {
            "Content-Type" : "application/json",
            Authorization: `Bearer qqYlHyvoss/pGBbV5XNerp2bbWgsTMt/s9xwYdvJWl1MvcPv3cwQWE+EJTTLZ7oU+hkLxVqe3M0W8K2y4XAnMHsg4rL2w77r+7pIb4oYOCPWQ14ShDzHSCca+i7+Gfuxn1uonvsQv184Lbi7ErWRMAdB04t89/1O/w1cDnyilFU=`

        },
        body: JSON.stringify({
            replyToken: rt,
            messages: [payload]
        })
    })
}

module.exports = send