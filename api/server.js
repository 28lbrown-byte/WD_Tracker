import express from "express";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());

let servers = []; // in-memory storage

app.get("/", (req, res) => {
  res.json(servers);
});

app.post("/", (req, res) => {
  const server = req.body;
  
  // Check if server already exists
  let existing = servers.find(s => s.id === server.id);
  if (existing) {
    // Update players/maxPlayers
    existing.players = server.players;
    existing.maxPlayers = server.maxPlayers;
    // Update highestValue if the new value is higher
    if (server.highestValue and server.highestValue > (existing.highestValue || 0)) {
      existing.highestValue = server.highestValue;
    }
  } else {
    server.highestValue = server.highestValue || 0;
    servers.push(server);
  }

  res.json({ success: true });
});

export default app;
