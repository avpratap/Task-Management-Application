// // import React from 'react';
// // import { Box, Button, Flex, Text } from '@chakra-ui/react';
// // import { Draggable } from 'react-beautiful-dnd';
// // import axios from 'axios';
// // import { useNavigate } from 'react-router-dom';


// // const Task = ({ task, index }) => {
// //   const navigate = useNavigate();

// //   const handleTaskDelete = async () => {
// //     try {
// //       await axios.delete(`/api/tasks/deleteTask/${task.id}`);
// //       navigate('/');
// //       // fetchTasks(); // Refresh the task list after deletion
// //     } catch (error) {
// //       console.error('Failed to delete task', error);
// //     }
// //   };


// //   return (
// //     <Draggable draggableId={task.id.toString()} index={index}>
// //       {(provided) => (
// //         <Box
// //           p={4}
// //           bg="blue.100"
// //           borderRadius="md"
// //           mb={4}
// //           {...provided.draggableProps}
// //           {...provided.dragHandleProps}
// //           ref={provided.innerRef}
// //         >
// //           <Text fontWeight="bold">{task.title}</Text>
// //           <Text>{task.description}</Text>
// //           <Text fontSize="sm" color="gray.500">Created at: {new Date(task.created_at).toLocaleString()}</Text>
// //           <Flex mt={2}>
// //             <Button size="xs" colorScheme="blue" mr={2}  >Edit</Button>
// //             <Button size="xs" colorScheme="red" mr={2}  onClick={handleTaskDelete}>Delete</Button>
// //             <Button size="xs" >View Details</Button>
// //           </Flex>
// //         </Box>
// //       )}
// //     </Draggable>
// //   );
// // };

// // export default Task;





// import React from 'react';
// import { Box, Button, Flex, Text, useDisclosure } from '@chakra-ui/react';
// import { Draggable } from 'react-beautiful-dnd';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import TaskEditForm from './TaskEditForm'

// const Task = ({ task, index }) => {
//   const navigate = useNavigate();

  

//   const { isOpen, onOpen, onClose, onUpdate } = useDisclosure();

//   const handleTaskDelete = async () => {
//     try {
//       await axios.delete(`/api/tasks/deleteTask/${task.id}`);
//       navigate('/');
//       // fetchTasks(); // Refresh the task list after deletion
//     } catch (error) {
//       console.error('Failed to delete task', error);
//     }
//   };
 
//   const handleUpdate = (updatedTask) => {
//     onUpdate(updatedTask);
//   };

//   // const handleUpdate = (updatedTask) => {
//   //        setTasks((prevTasks) =>
//   //          prevTasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
//   //        );
//   //           onUpdate(updatedTask);
//   //      };

//   return (
//     <Draggable draggableId={task.id.toString()} index={index}>
//       {(provided) => (
//         <Box
//           p={4}
//           bg="blue.100"
//           borderRadius="md"
//           mb={4}
//           {...provided.draggableProps}
//           {...provided.dragHandleProps}
//           ref={provided.innerRef}
//         >
//           <Text fontWeight="bold">{task.title}</Text>
//           <Text>{task.description}</Text>
//           <Text fontSize="sm" color="gray.500">Created at: {new Date(task.created_at).toLocaleString()}</Text>
//           <TaskEditForm isOpen={isOpen} onClose={onClose} task={task} onUpdate={handleUpdate} />
//           <Flex mt={2}>
//             <Button size="xs" colorScheme="blue" mr={2} onClick={onOpen} >Edit</Button>
//             <Button size="xs" colorScheme="red" mr={2}  onClick={handleTaskDelete}>Delete</Button>
//             <Button size="xs" >View Details</Button>
//           </Flex>
          
//           <TaskEditForm isOpen={isOpen} onClose={onClose} task={task} onUpdate={handleUpdate} />
//         </Box>
//       )}
//     </Draggable>
//   );
// };

// export default Task;








// import React, { useState, useEffect } from 'react';
// import { Box, Button, Flex, Text, useDisclosure } from '@chakra-ui/react';
// import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton } from '@chakra-ui/react';
// import { Draggable } from 'react-beautiful-dnd';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import TaskEditForm from './TaskEditForm'

// const Task = ({ task, index }) => {
//   const navigate = useNavigate();
//   const [tasks, setTasks] = useState([]);

//   useEffect(() => {
//     const fetchTasks = async () => {
//       try {
//         const response = await axios.get('/api/tasks');
//         setTasks(response.data);
//       } catch (error) {
//         console.error('Failed to fetch tasks', error);
//       }
//     };

//     fetchTasks();
//   }, []);

//   const { isOpen, onOpen, onClose } = useDisclosure();

//   const handleTaskDelete = async () => {
//     try {
//       await axios.delete(`/api/tasks/deleteTask/${task.id}`);
//       navigate('/');
//       // fetchTasks(); // Refresh the task list after deletion
//     } catch (error) {
//       console.error('Failed to delete task', error);
//     }
//   };
 
//   // const onTaskEdit = (newTask) => {
//   //   setTasks((prevTasks) => [...prevTasks, newTask]);
//   //   onClose();
//   // };

//   const onTaskEdit = (updatedTask) => {
//     setTasks((prevTasks) =>
//       prevTasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
//     );
//   };


//   // const onTaskEdit = (updatedTask) => {
//   //   setTasks((prevTasks) =>
//   //     prevTasks.map((task) =>
//   //       task.id === updatedTask.id ? { ...task, ...updatedTask } : task
//   //     )
//   //   );
//   //   onClose();
//   // };

//   return (
//     <Draggable draggableId={task.id.toString()} index={index}>
//       {(provided) => (
//         <Box
//           p={4}
//           bg="blue.100"
//           borderRadius="md"
//           mb={4}
//           {...provided.draggableProps}
//           {...provided.dragHandleProps}
//           ref={provided.innerRef}
//         >
//           <Text fontWeight="bold">{task.title}</Text>
//           <Text>{task.description}</Text>
//           <Text fontSize="sm" color="gray.500">Created at: {new Date(task.created_at).toLocaleString()}</Text>
//           <Flex mt={2}>
//             <Button size="xs" colorScheme="blue" mr={2} onClick={onOpen} >Edit</Button>
//             <Button size="xs" colorScheme="red" mr={2}  onClick={handleTaskDelete}>Delete</Button>
//             <Button size="xs" >View Details</Button>
//           </Flex>
          
//           <Modal isOpen={isOpen} onClose={onClose}>
//         <ModalOverlay />
//         <ModalContent>
//           <ModalHeader>Edit Task</ModalHeader>
//           <ModalCloseButton />
//           <ModalBody>
//             <TaskEditForm onTaskEdit={onTaskEdit} />
//           </ModalBody>
//         </ModalContent>
//       </Modal>
//         </Box>
//       )}
//     </Draggable>
//   );
// };

// export default Task;















// import React, { useState, useEffect } from 'react';
// import { Box, Button, Flex, Text, useDisclosure } from '@chakra-ui/react';
// import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton } from '@chakra-ui/react';
// import { Draggable } from 'react-beautiful-dnd';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import TaskEditForm from './TaskEditForm'

// const Task = ({ task, index }) => {
//   const navigate = useNavigate();
//   const [tasks, setTasks] = useState([]);

//   useEffect(() => {
//     const fetchTasks = async () => {
//       try {
//         const response = await axios.get('/api/tasks');
//         setTasks(response.data);
//       } catch (error) {
//         console.error('Failed to fetch tasks', error);
//       }
//     };

//     fetchTasks();
//   }, []);

//   const { isOpen, onOpen, onClose, onUpdate } = useDisclosure();

//   const handleTaskDelete = async () => {
//     try {
//       await axios.delete(`/api/tasks/deleteTask/${task.id}`);
//       navigate('/');
//       // fetchTasks(); // Refresh the task list after deletion
//     } catch (error) {
//       console.error('Failed to delete task', error);
//     }
//   };
 
//   // const onTaskEdit = (newTask) => {
//   //   setTasks((prevTasks) => [...prevTasks, newTask]);
//   //   onClose();
//   // };

//   const onTaskEdit = (updatedTask) => {
//     setTasks((prevTasks) =>
//       prevTasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
//     );
//     onUpdate(updatedTask);
//   };


//   // const onTaskEdit = (updatedTask) => {
//   //   setTasks((prevTasks) =>
//   //     prevTasks.map((task) =>
//   //       task.id === updatedTask.id ? { ...task, ...updatedTask } : task
//   //     )
//   //   );
//   //   onClose();
//   // };

//   return (
//     <Draggable draggableId={task.id.toString()} index={index}>
//       {(provided) => (
//         <Box
//           p={4}
//           bg="blue.100"
//           borderRadius="md"
//           mb={4}
//           {...provided.draggableProps}
//           {...provided.dragHandleProps}
//           ref={provided.innerRef}
//         > 
         
//           <Text fontWeight="bold">{task.title}</Text>
//           <Text>{task.description}</Text>
//           <Text fontSize="sm" color="gray.500">Created at: {new Date(task.created_at).toLocaleString()}</Text>
//           <Flex mt={2}>
//             <Button size="xs" colorScheme="blue" mr={2} onClick={onOpen} >Edit</Button>
//             <Button size="xs" colorScheme="red" mr={2}  onClick={handleTaskDelete}>Delete</Button>
//             <Button size="xs" >View Details</Button>
//           </Flex>
          
//           <Modal isOpen={isOpen} onClose={onClose}>
//         <ModalOverlay />
//         <ModalContent>
//           <ModalHeader>Edit Task</ModalHeader>
//           <ModalCloseButton />
//           <ModalBody>
//             <TaskEditForm onTaskEdit={onTaskEdit} isOpen={isOpen} onClose={onClose} task={task} onUpdate={onTaskEdit} />
//           </ModalBody>
//         </ModalContent>
//       </Modal>
//         </Box>
//       )}
//     </Draggable>
//   );
// };

// export default Task;










 








// import React, { useState, useEffect } from 'react';
// import { Box, Button, Flex, Text, useDisclosure } from '@chakra-ui/react';
// import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton } from '@chakra-ui/react';
// import { Draggable } from 'react-beautiful-dnd';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import TaskEditForm from './TaskEditForm';
// import ViewTaskForm from './ViewTaskForm';

// const Task = ({ task, index }) => {
//   const navigate = useNavigate();
//   const [tasks, setTasks] = useState([]);

//   useEffect(() => {
//     const fetchTasks = async () => {
//       try {
//         const response = await axios.get('/api/tasks');
//         setTasks(response.data);
//       } catch (error) {
//         console.error('Failed to fetch tasks', error);
//       }
//     };

//     fetchTasks();
//   }, []);

//   // const { isOpen, onOpen, onClose, onUpdate } = useDisclosure();
//   const editDisclosure = useDisclosure();
//   const viewDisclosure = useDisclosure();

//   const handleTaskDelete = async () => {
//     try {
//       await axios.delete(`/api/tasks/deleteTask/${task.id}`);
//       navigate('/');
//       // fetchTasks(); // Refresh the task list after deletion
//     } catch (error) {
//       console.error('Failed to delete task', error);
//     }
//   };
 
//   const onTaskView = (viewTask) => {
//     setTasks((prevTasks) => [...prevTasks, viewTask]);
//     viewDisclosure.onClose();
//   };

//   const onTaskEdit = (updatedTask) => {
//     setTasks((prevTasks) =>
//       prevTasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
//     );
//     editDisclosure.onUpdate(updatedTask);
//   };


//   // const onTaskEdit = (updatedTask) => {
//   //   setTasks((prevTasks) =>
//   //     prevTasks.map((task) =>
//   //       task.id === updatedTask.id ? { ...task, ...updatedTask } : task
//   //     )
//   //   );
//   //   onClose();
//   // };

//   return (
//     <Draggable draggableId={task.id.toString()} index={index}>
//       {(provided) => (
//         <Box
//           p={4}
//           bg="blue.100"
//           borderRadius="md"
//           mb={4}
//           {...provided.draggableProps}
//           {...provided.dragHandleProps}
//           ref={provided.innerRef}
//         >
//           <Text fontWeight="bold">{task.title}</Text>
//           <Text>{task.description}</Text>
//           <Text fontSize="sm" color="gray.500">Created at: {new Date(task.created_at).toLocaleString()}</Text>
//           <Flex mt={2}>
//             <Button size="xs" colorScheme="blue" mr={2} onClick={editDisclosure.onOpen} >Edit</Button>
//             <Button size="xs" colorScheme="red" mr={2}  onClick={handleTaskDelete}>Delete</Button>
//             <Button size="xs" Click={viewDisclosure.onOpen}>View Details</Button>
//           </Flex>
          
//           <Modal isOpen={editDisclosure.isOpen} onClose={editDisclosure.onClose}>
//         <ModalOverlay />
//         <ModalContent>
//           <ModalHeader>Edit Task</ModalHeader>
//           <ModalCloseButton />
//           <ModalBody>
//             <TaskEditForm onTaskEdit={onTaskEdit} isOpen={editDisclosure.isOpen} onClose={editDisclosure.onClose} task={task} onUpdate={onTaskEdit} />
            
//           </ModalBody>
//         </ModalContent>
//       </Modal>

//       <Modal isOpen={viewDisclosure.isOpen} onClose={viewDisclosure.onClose}>
//         <ModalOverlay />
//         <ModalContent>
//           <ModalHeader>View Details</ModalHeader>
//           <ModalCloseButton />
//           <ModalBody>
//             <ViewTaskForm  onTaskView={onTaskView} />
//           </ModalBody>
//         </ModalContent>
//       </Modal>
//         </Box>
//       )}
//     </Draggable>
//   );
// };

// export default Task;
















// import React, { useState, useEffect } from 'react';
// import { Box, Button, Flex, Text, useDisclosure } from '@chakra-ui/react';
// import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton } from '@chakra-ui/react';
// import { Draggable } from 'react-beautiful-dnd';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import TaskEditForm from './TaskEditForm';
// import ViewTaskForm from './ViewTaskForm';

// const Task = ({ task, index }) => {
//   const navigate = useNavigate();
//   const [tasks, setTasks] = useState([]);

//   useEffect(() => {
//     const fetchTasks = async () => {
//       try {
//         const response = await axios.get('/api/tasks');
//         setTasks(response.data);
//       } catch (error) {
//         console.error('Failed to fetch tasks', error);
//       }
//     };

//     fetchTasks();
//   }, []);

//   const { isOpen, onOpen, onClose, onUpdate } = useDisclosure();
//    // const editDisclosure = useDisclosure();
//   //  const viewDisclosure = useDisclosure();

 
//   const handleTaskDelete = async () => {
//     try {
//       await axios.delete(`/api/tasks/deleteTask/${task.id}`);
//       navigate('/');
//       // fetchTasks(); // Refresh the task list after deletion
//     } catch (error) {
//       console.error('Failed to delete task', error);
//     }
//   };
 
//   const onTaskView = (viewTask) => {
//     setTasks((prevTasks) => [...prevTasks, viewTask]);
//     onClose();
//   };

//   const onTaskEdit = (updatedTask) => {
//     setTasks((prevTasks) =>
//       prevTasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
//     );
//     onUpdate(updatedTask);
//   };


//   // const onTaskEdit = (updatedTask) => {
//   //   setTasks((prevTasks) =>
//   //     prevTasks.map((task) =>
//   //       task.id === updatedTask.id ? { ...task, ...updatedTask } : task
//   //     )
//   //   );
//   //   onClose();
//   // };

//   return (
//     <Draggable draggableId={task.id.toString()} index={index}>
//       {(provided) => (
//         <Box
//           p={4}
//           bg="blue.100"
//           borderRadius="md"
//           mb={4}
//           {...provided.draggableProps}
//           {...provided.dragHandleProps}
//           ref={provided.innerRef}
//         > 
         
//           <Text fontWeight="bold">{task.title}</Text>
//           <Text>{task.description}</Text>
//           <Text fontSize="sm" color="gray.500">Created at: {new Date(task.created_at).toLocaleString()}</Text>
//           <Flex mt={2}>
//             <Button size="xs" colorScheme="blue" mr={2} onClick={onOpen} >Edit</Button>
//             <Button size="xs" colorScheme="red" mr={2}  onClick={handleTaskDelete}>Delete</Button>
//             <Button size="xs" onClick={onOpen} >View Details</Button>
//           </Flex>
          
//           <Modal isOpen={isOpen} onClose={onClose}>
//         <ModalOverlay />
//         <ModalContent>
//           <ModalHeader>Edit Task</ModalHeader>
//           <ModalCloseButton />
//           <ModalBody>
//             <TaskEditForm onTaskEdit={onTaskEdit} isOpen={isOpen} onClose={onClose} task={task} onUpdate={onUpdate} />
//           </ModalBody>
//         </ModalContent>
//       </Modal>


//       <Modal isOpen={isOpen} onClose={onClose}>
//         <ModalOverlay />
//         <ModalContent>
//           <ModalHeader>View Deatails</ModalHeader>
//           <ModalCloseButton />
//           <ModalBody>
//             <ViewTaskForm onTaskView={onTaskView} />
//           </ModalBody>
//         </ModalContent>
//       </Modal>
//         </Box>
//       )}
//     </Draggable>
//   );
// };

// export default Task;















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
              <ModalHeader>Edit Task</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <TaskEditForm onTaskEdit={onTaskEdit} task={task} />
              </ModalBody>
            </ModalContent>
          </Modal>

          <Modal isOpen={isViewOpen} onClose={onViewClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>View Details</ModalHeader>
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
