const express = require("express");
const morgan = require("morgan");

const server = express();

server.get("/", (req, res) => {
  res.send("ayoooo we up in this backend");
});

server.use(express.json()).use(morgan("combined"));

module.exports = server;
