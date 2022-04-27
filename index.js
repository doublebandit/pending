const express = require("express")
const fetch = require("node-fetch")
const app = express()

require('dotenv').config()

const cookie = process.env.cookie
const groupId = process.env.group

app.get("/pending", async (req, res) => {
    fetch(`https://economy.roblox.com/v1/groups/${groupId}/revenue/summary/day`, {
        headers: {
            cookie: `.ROBLOSECURITY=${cookie}`
        }
    })
        .then(result => result.json())
        .then(json => {
            return res.json({
                pending: json.pendingRobux
            })
        });
})

app.listen(process.env.PORT || 3030)