const express = require("express");
const TaskHandler = require("./../controllers/taskHandler");
const Router = express.Router();

Router.get("/", TaskHandler.countDocs, TaskHandler.showList);

module.exports = Router;
