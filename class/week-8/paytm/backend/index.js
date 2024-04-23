const express = require("express");
const rootRouter = require('./routes/index.js')

const app = express();
app.use("/app/v1", rootRouter);