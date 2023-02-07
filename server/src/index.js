const express = require("express");
const cors = require("cors");
const uploadRoutes = require("./routes/upload.routes");

const app = express();

app.get("/", (req, res) => {
  res.send("SERVER: AWS S3 File Upload Project");
});

// Middlewares
app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api", uploadRoutes);

const PORT = process.env.PORT || 5005;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
