const express = require("express");
const { PORT } = require("./config/serverConfig");
const apiRouter = require("./routes/apiRouter");

const app = express();
app.use("/api", apiRouter);

app.listen(PORT, () => {
  console.log(`Server is running on the port ${PORT}...`);
});
