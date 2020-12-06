const express = require('express');
const app = express();

app.get("/api", (req, res) => {
    const result = ["Communicating with Node.js.."];
    res.send(result);
  });
app.listen(3001, () => console.log('Node.js Server is running on port 3001...'));