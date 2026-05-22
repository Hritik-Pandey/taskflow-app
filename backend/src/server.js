const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");

dotenv.config();

connectDB();

const app = express();87

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "TaskFlow API Running Successfully",
  });
});

app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const projectRoutes = require("./routes/projectRoutes");

app.use("/api/projects", projectRoutes);

app.use("/api/auth", authRoutes);
app.use("/api/projects", projectRoutes);

const taskRoutes = require("./routes/taskRoutes");

app.use("/api/tasks", taskRoutes);