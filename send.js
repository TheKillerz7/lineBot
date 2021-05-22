const request = require('request-promise')

const send = (req, res) =>{
    reply('s', {
        type: 'text',
        text: 'Hello dsadsaWorld!'
      })
}

const getUserIds = () =>{
    const ids = request.get({
        url: "https://api.line.me/v2/bot/followers/ids",
        headers: {
            Authorization: `Bearer qqYlHyvoss/pGBbV5XNerp2bbWgsTMt/s9xwYdvJWl1MvcPv3cwQWE+EJTTLZ7oU+hkLxVqe3M0W8K2y4XAnMHsg4rL2w77r+7pIb4oYOCPWQ14ShDzHSCca+i7+Gfuxn1uonvsQv184Lbi7ErWRMAdB04t89/1O/w1cDnyilFU=`
        },
    })
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
            to: 'Uf6a475f2e75abee2a91d043da265705d',
            messages: [payload]
        })
    })
}

module.exports = send