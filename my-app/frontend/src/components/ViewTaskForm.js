import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, Textarea,  } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';


const ViewTaskForm = ({ onTaskView, task, onClose} ) => {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [status, setStatus] = useState(task.status);
  const navigate = useNavigate();



const handleSubmit = () => {
    navigate('/');
  };

  return (
    <Box mb={8}>
      <form>
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
          <Input value={status} onChange={(e) => setStatus(e.target.value)} />
          
        </FormControl>
        <Button colorScheme="blue" mt={4} type="submit" onClick={handleSubmit} >
          Close
        </Button>
      </form>
    </Box>
  );
};

export default ViewTaskForm;
