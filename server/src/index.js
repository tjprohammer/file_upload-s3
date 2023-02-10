
import express from 'express'
import cors from 'cors';
import bodyParser from 'body-parser'
import { uploadRouter } from './routes/upload.routes.js';

const app = express();

app.get("/", (req, res) => {
  res.send("SERVER: AWS S3 File Upload Project");
});

// Middlewares
app.use(cors());
app.use(express.json());
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api", uploadRouter);

const PORT = process.env.PORT || 5005;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
