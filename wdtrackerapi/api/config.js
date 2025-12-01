import express from "express";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());

let config = {
  theme: "dark",
  refreshRate: 10,
  minValue: 1000000,
  maxValue: 5000000,
  showHoverPanel: true,
};

app.get("/", (req, res) => {
  res.json(config);
});

app.post("/", (req, res) => {
  config = req.body;
  res.json({ success: true });
});

export default app;
