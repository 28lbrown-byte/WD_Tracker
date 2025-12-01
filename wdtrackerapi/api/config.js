let config = {
  theme: "dark",
  refreshRate: 10,
  minValue: 1000000,
  maxValue: 5000000,
  showHoverPanel: true,
};

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(config);
  } else if (req.method === "POST") {
    config = req.body;
    res.status(200).json({ success: true });
  } else {
    res.status(405).send("Method Not Allowed");
  }
}
