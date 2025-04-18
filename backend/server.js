const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

const authRoutes = require("./routes/auth");
const protectedRoutes = require("./routes/protected");

app.use("/api", authRoutes);
app.use("/api", protectedRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
