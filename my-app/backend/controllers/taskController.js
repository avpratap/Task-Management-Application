const { createTask, getTasksByUser, updateTaskStatus, deleteTasksByUserId, editTaskByUserId } = require('../models/Task');

const getTasks = async (req, res) => {
  const tasks = await getTasksByUser(req.user.id);
  res.status(200).json(tasks);
};

const createNewTask = async (req, res) => {
  console.log("function called");
  console.log(req.body);
  const { title, description, status, task_id } = req.body;
  const task = await createTask(title, description, status, req.user.id, task_id);
  console.log("user id of the new task created is: ", req.user.id);
  res.status(201).json(task);
};

const taskEdit = async (req, res) => {
  console.log("function called for taskedit");
  const { title, description } = req.body;
  // console.log("createNewTask info is: ", title, description, status);
  // console.log("user id of the new task created is: ", req.user.id);
  const task = await editTaskByUserId(title, description, req.id);
  res.status(201).json(task);
};


const updateTask = async (req, res) => {
  const { status, task_id } = req.body;
  
  // const {task_id} = req.params.taskId;
  console.log("req is: ",task_id);

  console.log("updateTask taskId and status: ", task_id, status);
  const task = await updateTaskStatus(task_id, status);
  console.log("task updated successfully");
  res.status(200).json(task);
};

const deleteTask = async (req, res) => {
  const task_id = req.params.taskId;
  console.log("started deleted with taskid: ", task_id);
  try{
  const rows = await deleteTasksByUserId(task_id);
  console.log("deletion sucessful with taskId: ", task_id, "and rows: ", rows);
  }
  catch(error){
    console.error("Error deleting task with taskId: ", task_id, "Error: ", error);
    res.status(500).json({ message: "Error deleting task", error: error.message });
  }
  res.status(200).json({ message: "Task deleted successfully for task_id: ", task_id });

};

const editTask = async(req, res) => {
  const { title, description } = req.body;
  console.log("in controller, editTask info for Taskid: ", req.id ,title, description);
  const task = await editTaskByUserId(title, description, req.id);
  console.log("editTask query ran successfully");
  res.status(201).json(task);
}


module.exports = {
  getTasks,
  createNewTask,
  updateTask,
  deleteTask,
  editTask,
  taskEdit
};




