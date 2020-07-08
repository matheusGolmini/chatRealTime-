import Koa from 'koa'
import http from 'http'
import socket from 'socket.io'

const app = new Koa()
const server = http.createServer(app.callback())
const io = socket(server)

const SERVER_HOST = 'localhost'
const SERVER_PORT = 4000

io.on('connection', socket => {
  console.log('IO Connetion Server')
  socket.on('chat.message', data => {
    console.log('SOKET chat.message =>', data)
    io.emit('chat.message', data)
  })
  socket.on('disconnect', () => {
    console.log('Disconnect')
  })
})

server.listen(SERVER_PORT, SERVER_HOST, () => {
  console.log('Server run')
})
