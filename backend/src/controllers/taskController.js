const Task = require("../models/Task");

const createTask = async (req, res) => {
  try {

    const task = await Task.create(req.body);

    res.status(201).json({
      success: true,
      task,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

const getTasks = async (req, res) => {
  try {

    const tasks = await Task.find();

    res.status(200).json({
      success: true,
      tasks,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

module.exports = {
  createTask,
  getTasks,
};