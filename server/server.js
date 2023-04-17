const express = require("express");
const dotenv = require("dotenv");

// Route files
const productRoutes = require("./routes/productRoutes");

// Load env vars
dotenv.config({ path: "./config/config.env" });

const app = express();

app.use("/api/v1/products", productRoutes);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
