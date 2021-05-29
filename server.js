const http = require('http');
const socketio = require('socket.io')

const server = http.createServer((req, res) => {
    res.end('hello server js')
});

server.listen(3000, () => {
    console.log('server 3000 portda ishladi');
});

const io = socketio.listen(server);

io.sockets.on("connection", (Socket) => {
    console.log('klent ulandi');

    Socket.on('salom', (data) => {
        console.log('men serverdanman');
        console.log(data);
    })
})