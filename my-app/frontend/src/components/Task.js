import React, { useState, useEffect } from 'react';
import { Box, Button, Flex, Text, useDisclosure } from '@chakra-ui/react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton } from '@chakra-ui/react';
import { Draggable } from 'react-beautiful-dnd';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import TaskEditForm from './TaskEditForm';
import ViewTaskForm from './ViewTaskForm';

const Task = ({ task, index }) => {
  const navigate = useNavigate();
  const [tasks,setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get('/api/tasks');
        setTasks(response.data);
      } catch (error) {
        console.error('Failed to fetch tasks', error);
      }
    };

    fetchTasks();
  }, []);

  const {
    isOpen: isEditOpen,
    onOpen: onEditOpen,
    onClose: onEditClose
  } = useDisclosure();
  
  const {
    isOpen: isViewOpen,
    onOpen: onViewOpen,
    onClose: onViewClose
  } = useDisclosure();

  const handleTaskDelete = async () => {
    try {
      await axios.delete(`/api/tasks/deleteTask/${task.id}`);
      navigate('/');
      // fetchTasks(); // Refresh the task list after deletion
    } catch (error) {
      console.error('Failed to delete task', error);
    }
  };

  const onTaskView = (viewTask) => {
    setTasks((prevTasks) => [...prevTasks, viewTask]);
    onViewClose();
  };

  const onTaskEdit = (updatedTask) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
    onEditClose();
  };

  return (
    <Draggable draggableId={task.id.toString()} index={index}>
      {(provided) => (
        <Box
          p={4}
          bg="blue.100"
          borderRadius="md"
          mb={4}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <Text fontWeight="bold">{task.title}</Text>
          <Text>{task.description}</Text>
          <Text fontSize="sm" color="gray.500">Created at: {new Date(task.created_at).toLocaleString()}</Text>
          <Flex mt={2}>
            <Button size="xs" colorScheme="blue" mr={2} onClick={onEditOpen}>Edit</Button>
            <Button size="xs" colorScheme="red" mr={2} onClick={handleTaskDelete}>Delete</Button>
            <Button size="xs" onClick={onViewOpen}>View Details</Button>
          </Flex>

          <Modal isOpen={isEditOpen} onClose={onEditClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader
              fontSize="2xl"
              fontWeight="bold"
              color="blue.500"
              bg="gray.50"
              p={4}
              borderBottom="1px solid"
              borderColor="gray.200"
              textAlign="center">Edit Task</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <TaskEditForm onTaskEdit={onTaskEdit} task={task} />
              </ModalBody>
            </ModalContent>
          </Modal>

          <Modal isOpen={isViewOpen} onClose={onViewClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader
              fontSize="2xl"
              fontWeight="bold"
              color="blue.500"
              bg="gray.50"
              p={4}
              borderBottom="1px solid"
              borderColor="gray.200"
              textAlign="center">View Details</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <ViewTaskForm onTaskView={onTaskView} task={task} onClose/>
              </ModalBody>
            </ModalContent>
          </Modal>
        </Box>
      )}
    </Draggable>
  );
};

export default Task;
