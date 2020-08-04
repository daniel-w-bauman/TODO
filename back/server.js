const express = require('express')
const server = express()

server.get('/', (req,res) => {
  res.end('<html><head></head><body><h1>Hello World</h1></body></html>')
})

server.listen(3000)
