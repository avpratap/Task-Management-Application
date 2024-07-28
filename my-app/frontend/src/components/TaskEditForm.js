import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, Textarea,Select, Flex } from '@chakra-ui/react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const TaskEditForm = ({ onTaskEdit, isOpen, onClose, task, onUpdate }) => {
  const [title, setTitle] = useState(task.title);
   const [description, setDescription] = useState(task.description);
  //  const CurrStatus = task.status;
  const [status, setStatus] = useState(task.status);
  const task_id = task.id;
  const navigate = useNavigate();


  
const handleCancel = () => {
  navigate('/');
};


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("editing task with title: ", title, description);
      // const myVariable = task.id;


      const response = await axios.post(`/api/tasks/createNewTask`, { title, description, status, task_id});
      console.log("Update response:", response.data);
      //onUpdate(response.data);
      navigate('/');

      // onClose();
      
    } catch (error) {
      console.error('Failed to update task', error);
    }
    
  };

  return (
    <Box mb={8}>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel>Title</FormLabel>
          <Input value={title} onChange={(e) => setTitle(e.target.value)} />
        </FormControl>
        <FormControl mt={4}>
          <FormLabel>Description</FormLabel>
          <Textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        </FormControl>
        <FormControl mt={4}>
          <FormLabel>Status</FormLabel>
          {/* <Input value={status} onChange={(e) => setStatus(e.target.value)} /> */}
          <Select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="TODO">TODO</option>
            <option value="IN PROGRESS">IN PROGRESS</option>
            <option value="DONE">DONE</option>
          </Select>
        </FormControl>
        <Flex mt={4} gap={4}>
  <Button colorScheme="blue" type="submit" onClick={handleSubmit}>
    Edit Task
  </Button>
  <Button colorScheme="blue" onClick={handleCancel}>Cancel</Button>
</Flex>
      </form>
    </Box>
  );
};

export default TaskEditForm;













































