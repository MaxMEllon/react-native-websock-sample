const express = require('express')
const http = require('http').Server()
const io = require('socket.io')(http)

const app = express()

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS')
  next()
})

app.options('*', (req, res) => res.sendStatus(200))

const users = {}

io.on('connection', socket => {
  users[socket.id] = socket
  socket.emit('user/join', {
    _id: socket.id,
    name: socket.id,
    avatar: 'https://placeimg.com/140/140/any',
  }, data => console.log(data))
  socket.on('message/to-server', payload => {
    io.sockets.emit('message/sync', payload)
    setTimeout(() => {
      io.sockets.emit('message/sync', {
        _id: Math.random() * 100000,
        text: 'maxmellon です',
        createdAt: new Date(),
        user: {
          _id: 2222,
          name: 'maxmellon',
          avatar: 'https://placeimg.com/140/140/any',
        },
      })
    }, 2000)
  })
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
      ],
    }),
  )
})

app.listen(4000, () => console.log('listening on *:4000'))
http.listen(3000, () => console.log('listening on *:3000'))
