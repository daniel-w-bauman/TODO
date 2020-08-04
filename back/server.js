const express = require('express')
const server = express()

server.get('/', (req,res) => {
  res.end('Hello World')
})

server.listen(3000)
