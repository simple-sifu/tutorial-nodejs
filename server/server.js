const express = require("express");
const dotenv = require("dotenv");

// Route files
const products = require("./routes/products");

// Load env vars
dotenv.config({ path: "./config/config.env" });

const app = express();

app.use("/api/v1/products", products);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
