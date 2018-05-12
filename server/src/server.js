const express = require('express')
const io = require('socket.io')(http)
const http = require('http').Server()

const app = express()

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS')
  next()
})

app.options('*', (req, res) => res.sendStatus(200))

io.on('connection', socket => {
  console.log('hoge')
})

http.listen(8080, () => console.log(`listening on *:8080`))
app.listen(4000, () => console.log(`listening on *:4000`))
