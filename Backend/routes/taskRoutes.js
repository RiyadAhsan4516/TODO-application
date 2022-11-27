const express = require("express");
const TaskHandler = require("./../controllers/taskHandler");
const Router = express.Router();

Router.route("/")
  .get(TaskHandler.countDocs, TaskHandler.getList)
  .post(TaskHandler.countDocs, TaskHandler.addTask);

Router.delete("/:taskNo", TaskHandler.deleteTask);

module.exports = Router;
