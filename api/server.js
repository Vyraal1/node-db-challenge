const express = require("express");
const morgan = require("morgan");

const server = express();

const tasksRouter = require("./routers/tasksRouter");
const projectsRouter = require("./routers/projectsRouter");
const resourcesRouter = require("./routers/resourcesRouter");

server.get("/", (req, res) => {
  res.send("ayoooo we up in this backend");
});

server.use(express.json()).use(morgan("combined"));

server.use("/api/projects", projectsRouter);
server.use("/api/tasks", tasksRouter);
server.use("/api/resources", resourcesRouter);

module.exports = server;
