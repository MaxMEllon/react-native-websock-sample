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

app.get('/rooms', (req, res) => {
  res.send(
    JSON.stringify({
      rooms: [
        {
          key: 1,
          _id: 1,
          name: 'room1',
          leatestMessage: '最新のメッセージ',
          time: '3:31 pm',
        },
        {
          key: 2,
          _id: 2,
          name: 'room2',
          leatestMessage: '最新のメッセージ',
          time: '3:35 pm',
        },
        {
          key: 3,
          _id: 3,
          name: 'room3',
          leatestMessage: '最新のメッセージ',
          time: '4:35 pm',
        },
      ]
    })
  )
})

http.listen(8080, () => console.log(`listening on *:8080`))
app.listen(4000, () => console.log(`listening on *:4000`))
