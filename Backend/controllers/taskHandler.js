const Tasks = require("./../model/taskModel");

exports.countDocs = async (req, res, next) => {
  req.total = await Tasks.countDocuments({});
  next();
};

exports.getList = async (req, res, next) => {
  try {
    const tasks = await Tasks.find().limit(3).sort("Date");
    res.status(200).json({
      status: "Success",
      TotalDocs: req.total,
      results: tasks.length,
      tasks,
    });
  } catch (err) {
    res.status(404).json({
      status: "Fail",
      message: err.message,
    });
  }
};

// For viewing
exports.showList = async (req, res, next) => {
  try {
    const tasks = await Tasks.find().limit(3).sort("Date");
    res.status(200).render("base", {
      TotalDocs: req.total,
      results: tasks.length,
      tasks,
    });
  } catch (err) {
    res.status(404).json({
      status: "Fail",
      message: err.message,
    });
  }
};

exports.addTask = async (req, res, next) => {
  try {
    const data = {
      Description: req.body.Description,
      Date: req.body.Date,
      DocNumber: req.total + 1,
    };

    const newTask = await Tasks.create(data);

    res.status(200).json({
      status: "Success",
      message: "New task added",
      newTask,
    });
  } catch (err) {
    res.status(400).json({
      status: "Fail",
      message: err.message,
    });
  }
};

exports.deleteTask = async (req, res, next) => {
  try {
    await Tasks.findOneAndDelete({ DocNumber: req.params.taskNo });

    res.status(201).json();
  } catch (err) {
    res.status(400).json({
      status: "Fail",
      message: err.message,
    });
  }
};
