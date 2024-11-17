const express = require("express");
const { PORT } = require("./config/serverConfig");
const pingRoutes = require("./routes/pingRoutes");

const app = express();
app.use("/api/v1/ping", pingRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on the port ${PORT}...`);
});
