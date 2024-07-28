const express = require('express');
const { getTasks, createNewTask, updateTask, deleteTask, editTask, taskEdit } = require('../controllers/taskController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.use(authMiddleware);

router.get('/', getTasks);
router.post('/createNewTask', createNewTask);
router.post('/taskEdit', taskEdit);
// router.put('/taskId', updateTask);
router.put('/updateTask', updateTask);
router.post('/editTask', editTask);
router.delete('/deleteTask/:taskId', deleteTask);

module.exports = router;





