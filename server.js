const express = require('express')
const morgan = require('morgan')

const app = express()
const PORT = 5050
app.use(morgan('dev'))

app.use(express.static('public'))





app.listen(PORT, console.log(`listening on ${PORT}`))