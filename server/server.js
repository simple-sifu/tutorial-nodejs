const express = require("express");
const dotenv = require("dotenv");

// Load env vars
dotenv.config({ path: "./config/config.env" });

const app = express();

app.get("/api/v1/products", (req, res) => {
  res.status(200).json({ success: true, data: { name: "Brad" } });
});

app.get("/api/v1/products/:id", (req, res) => {
  res
    .status(200)
    .json({ success: true, message: `Show product ${req.params.id}` });
});

app.post("/api/v1/products", (req, res) => {
  res.status(200).json({ success: true, message: "Create new product" });
});

app.put("/api/v1/products/:id", (req, res) => {
  res
    .status(200)
    .json({ success: true, message: `Update product ${req.params.id}` });
});

app.delete("/api/v1/products/:id", (req, res) => {
  res
    .status(200)
    .json({ success: true, message: `Delete product ${req.params.id}` });
});

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
