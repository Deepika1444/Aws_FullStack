const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const fs = require("fs");
const path = require("path");

const envLocalPath = path.resolve(__dirname, ".env.local");
const envPath = path.resolve(__dirname, ".env");

if (fs.existsSync(envLocalPath)) {
  dotenv.config({ path: envLocalPath });
} else {
  dotenv.config({ path: envPath });
}

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/register_db";

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Backend is running" });
});

app.use("/api/register", require("./src/routes/registerRoute"));

if (!MONGO_URI) {
  console.error("Missing MONGO_URI in environment variables (.env.local or .env).");
  process.exit(1);
}

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error.message);
    process.exit(1);
  });