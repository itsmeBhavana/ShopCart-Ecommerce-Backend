const express = require("express");
const { PORT } = require("./config/serverConfig");
const apiRouter = require("./routes/api_router");
const responseTime = require("response-time");

const app = express();

//application level middlewares
app.use(responseTime());
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));

app.use("/api", apiRouter);

app.listen(PORT, () => {
  console.log(`Server is running on the port ${PORT}...`);
});
