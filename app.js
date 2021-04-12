
const express = require('express')
// const createError = require('http-errors')
const app = express()
const port = 3000

// app.use(function (req, res, next) {
//     if (!req.user) return next(createError(401, 'Please login to view this page.'))
//     next()
// })

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})









































app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})