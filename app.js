// if (process.env.NODE_ENV !== "production"){
//     require("dotenv").config()
// }

const express = require('express')
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname, "public")))

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})



