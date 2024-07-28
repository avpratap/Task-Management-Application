const pool = require('../config/db');

const createTask = async (title, description, status, userId, task_id) => {
  const result = await pool.query('SELECT COUNT(*) FROM tasks where id = $1', [task_id]);
  console.log("rowcount is:", result.rowCount);
  if(task_id==null){
  const result = await pool.query(
    'INSERT INTO tasks (title, description, status, user_id) VALUES ($1, $2, $3, $4) RETURNING *',
    [title, description, status, userId]
  );
  console.log("add task query ran successfully");
  }
  else{
    const result = await pool.query(
      'UPDATE tasks SET title = ($1), description = ($2), status = ($3) WHERE id = ($4)',
      [title, description, status, task_id]
    );  
    console.log("edit query ran successfully");
  }
  return result.rows[0];
};

const getTasksByUser = async (userId) => {
  const result = await pool.query('SELECT * FROM tasks WHERE user_id = $1', [userId]);
  return result.rows;
};

const updateTaskStatus = async (taskId, status) => {
  console.log("updating task from dragging taskid and status:", taskId, status);
  const result = await pool.query(
    'UPDATE tasks SET status = $1 WHERE id = $2 RETURNING *',
    [status, taskId]
  );
  return result.rows[0];
};

const deleteTasksByUserId = async (taskId) => {
  const result = await pool.query('delete from tasks WHERE id = $1', [taskId]);
  return result.rowCount;
};

const editTaskByUserId = async (title, description, taskId) => {
  const result = await pool.query(
    'UPDATE tasks SET title = ($1), description = ($2) WHERE id = ($3)',
    [title, description, taskId]
  );
  return result.rowCount;
}

module.exports = {
  createTask,
  getTasksByUser,
  updateTaskStatus,
  deleteTasksByUserId,
  editTaskByUserId
};








 




