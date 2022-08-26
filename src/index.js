const express = require('express');
const cors = require('cors');


const app = express();

const rooms = [
    'general',
    'tech',
    'crypto',
    'animal'
]

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());

const server = require('http').createServer(app);
const PORT = 5000;
const io = require ("socket.io")(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ["GET", "POST"]
    }
});

server.listen(PORT, ()=> {
    console.log(`Listening to port ${PORT}`)
})