import express from "express";

const config = require("../config.json");
const app = express();
const PORT =
  config.env == "dev" ? config.port.dev || 3001 : config.port.prod || 80;

const main = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
      console.log(`Running in ${config.env} mode`);
    });
  } catch (error) {
    console.error(error);
  }
};

main();
