const Logger = require('./utils/logger');
const logger = new Logger();
const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.enable('trust proxy');
app.use("/api", require("./routes/api"));

app.get('/', (req, res) => {
  res.status(200).send('ok')
});


app.listen(port, () => {
  console.clear();
  logger.log(`Server started on port ${port}`, "Server");
});