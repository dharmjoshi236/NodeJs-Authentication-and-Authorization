const express = require("express");
const cors = require("cors");
const { envConstants } = require("./constants/envConstants");
const { connectDb } = require("./db");
const indexRouter = require('./routes/index')
const app = express();

app.use(express.json());
app.use(cors());
app.use("/api", indexRouter);

app.listen(envConstants.serverPort, async () => {
  await connectDb();
  console.log(`Server is listening on ${envConstants.serverPort}`);
});
