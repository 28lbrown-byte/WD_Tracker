let servers = []; // in-memory storage (resets on redeploy)

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(servers);
  } else if (req.method === "POST") {
    const server = req.body;
    server.timestamp = Date.now();
    servers.push(server);
    res.status(200).json({ success: true });
  } else {
    res.status(405).send("Method Not Allowed");
  }
}
