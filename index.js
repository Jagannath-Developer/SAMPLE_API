const express = require('express');
const http = require('http');
const WebSocket = require('ws');


const app = express();
app.get('/', (req, res) => {
  res.send("Server connected...!");
})
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

wss.on('connection', socket => {
  socket.on('message', message => {
    console.log("recived:", message.toString())
    // socket.send("from user:"+message);
    // socket.send("message:"+message.toString());
    wss.clients.forEach(function(client) {
      if (client != socket) {
        client.send("" + message);
      }
    })
  })

  socket.on("open", function() {
    console.log("open:");
  })
  socket.on("close", function() {
    console.log("i lost my connection");
  })
  // console.log("one more client is connected")
})
app.get("/data", async (req, res) => {
  wss.send("Hello world Jitu")

  res.send("Data send");

})

server.listen(3000, () => {
  console.log(`Listening on port `);
});
