const express = require('express')
const res = require('express/lib/response')
const morgan = require('morgan')

const app = express()
const PORT = 5050

const posts = require('./data/posts.json')
app.use(morgan('dev'))

app.use(express.static('public'))
app.use(express.urlencoded({extended: false}))

app.get('/api/posts', (req, res) => {
  res.json(posts)
})

app.post('/api/posts', (req, res) => {
  const id = Date.now()
  const title = req.body.Title
  const body = req.body.Body
  const post = {
    id,
    title,
    body
  }
  posts.push(post)
  res.status(201).json(post)
})



app.listen(PORT, console.log(`listening on ${PORT}`))