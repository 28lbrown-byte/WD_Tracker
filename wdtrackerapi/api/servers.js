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
  server.timestamp = Date.now();
  servers.push(server);
  res.json({ success: true });
});

export default app;
