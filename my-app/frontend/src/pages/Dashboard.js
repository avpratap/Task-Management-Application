import React, { useState, useEffect } from 'react';
import { Box, Button, Flex, useDisclosure } from '@chakra-ui/react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton } from '@chakra-ui/react';
import { DragDropContext } from 'react-beautiful-dnd';
import axios from 'axios';
// import { useAuth } from '../context/AuthContext';
// import Task from '../components/Task';
import Column from '../components/Column';
import NewTaskForm from '../components/NewTaskForm';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  // const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get('api/tasks');
        setTasks(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchTasks();
  }, []);

 
  const { isOpen, onOpen, onClose } = useDisclosure();

  const onTaskCreated = (editTask) => {
    setTasks((prevTasks) => [...prevTasks, editTask]);
    onClose();
  };

  

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const newTasks = Array.from(tasks);
    console.log("all tasks: ", newTasks);
    const [movedTask] = newTasks.splice(result.source.index, 1);
    console.log("result index: ", result.destination.index);
    newTasks.splice(result.destination.index, 0, movedTask);
    setTasks(newTasks);

    


    console.log("remaning Tasks id is: ", newTasks.id);
    console.log("movedTask id is: ", movedTask.id);
    console.log(result.destination.droppableId, 1);
    console.log("taskid from tasks is for dragging: ", tasks.id);

    // Optional: Update backend with new order
    console.log("moved task status and id: ",result.destination.droppableId, movedTask.id);
    axios.put(`/api/tasks/updateTask`, { status: result.destination.droppableId, task_id: movedTask.id });
    navigate('/');
  };

  return (
    <Box maxW="7xl" mx="auto" mt={8}>
     
      <Button colorScheme="blue" onClick={onOpen}>Add New Task</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontSize="2xl"
          fontWeight="bold"
          color="blue.500"
          bg="gray.50"
          p={4}
          borderBottom="1px solid"
          borderColor="gray.200"
          textAlign="center">Create New Task</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <NewTaskForm onTaskCreated={onTaskCreated} />
          </ModalBody>
        </ModalContent>
      </Modal>

      <DragDropContext onDragEnd={onDragEnd}>
        <Flex justifyContent="space-between">
          <Column title="TODO" tasks={tasks.filter(task => task.status === 'TODO')} />
          <Column title="IN PROGRESS" tasks={tasks.filter(task => task.status === 'IN PROGRESS')} />
          <Column title="DONE" tasks={tasks.filter(task => task.status === 'DONE')} />
        </Flex>
      </DragDropContext>
    </Box>
  );
};

export default Dashboard;






























