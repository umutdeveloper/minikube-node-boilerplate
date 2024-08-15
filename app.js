const express = require("express");
const app = express();

const podName = process.env.HOSTNAME;

app.get("/", (req, res) => {
  res.send(`Hello, Kubernetes from ${podName}`);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
