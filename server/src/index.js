const express = require("express");
const app = express();


app.get("/", (req, res) => {
  res.send("SERVER: AWS S3 File Upload Project");
});

//Middlewares
app.use(express.static('public'));
app.use(express.json());

//Routes
app.use('/api', require('./routes/upload.routes'))

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log("Server running"));
