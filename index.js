const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = 3000;

app.use("/assets", express.static(path.join(__dirname, "assets")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});


fs.readdirSync(__dirname).forEach(file => {
  if (file.endsWith(".html") && file !== "index.html") {
    const route = file.replace(".html", "");
    app.get(`/${route}`, (req, res) => {
      res.sendFile(path.join(__dirname, file));
    });
  }
});

// 404
app.use((req, res) => {
  res.status(404).send("404 - Page Not Found");
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
