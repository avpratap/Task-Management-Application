// // frontend/src/components/TaskEditForm.js
// import React, { useState } from 'react';
// import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, FormControl, FormLabel, Input, Button } from '@chakra-ui/react';
// import axios from 'axios';

// const TaskEditForm = ({ isOpen, onClose, task, onUpdate }) => {
//   console.log("Task data:", task);
//   const [title, setTitle] = useState(task.title);
//   const [description, setDescription] = useState(task.description);
//   // const [status, setstatus] = useState(task.status);  
//   // const [id, setid] = useState(task.status);  
  



 



  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     console.log("editing task with title: ", title);
  //     const response = await axios.put(`/api/tasks/editTask`, { title, description });
  //     console.log("Update response:", response.data);
  //     onUpdate(response.data);
  //     onClose();
      

  //   } catch (error) {
  //     console.error('Failed to update task', error);
  //   }
    
  // };

//   return (
//     <Modal isOpen={isOpen} onClose={onClose}>
//       <ModalOverlay />
//       <ModalContent>
//         <ModalHeader>Edit Task</ModalHeader>
//         <ModalCloseButton />
//         <ModalBody>
        
//           <FormControl id="title" isRequired>
//             <FormLabel>Title</FormLabel>
//             <Input value={title} onChange={(e) => setTitle(e.target.value)} />
//           </FormControl>
//           <FormControl id="description" mt={4}>
//             <FormLabel>Description</FormLabel>
//             <Input value={description} onChange={(e) => setDescription(e.target.value)} />
//           </FormControl>
          
        
//         </ModalBody>
//         <ModalFooter>
//           <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
//             Save
//           </Button>
//           <Button variant="ghost" onClick={onClose}>Cancel</Button>
//         </ModalFooter>
//       </ModalContent>
//     </Modal>
    
//   );
// };

// export default TaskEditForm;














// import React, { useState } from 'react';
// import { Box, Button, FormControl, FormLabel, Input, Textarea } from '@chakra-ui/react';
// import axios from 'axios';

// const TaskEditForm = ({ onTaskEdit }) => {
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [status, setStatus] = useState('TODO');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       console.log("tried to create a new task");
//       const response = await axios.post('/api/tasks/createNewTask', { title, description, status });
//       onTaskEdit(response.data);
//       setTitle('');
//       setDescription('');
//       setStatus('TODO');
      
//     } catch (error) {
//       console.error('Failed to create task', error);
//     }
//   };

//   return (
//     <Box mb={8}>
//       <form onSubmit={handleSubmit}>
//         <FormControl>
//           <FormLabel>Title</FormLabel>
//           <Input value={title} onChange={(e) => setTitle(e.target.value)} />
//         </FormControl>
//         <FormControl mt={4}>
//           <FormLabel>Description</FormLabel>
//           <Textarea value={description} onChange={(e) => setDescription(e.target.value)} />
//         </FormControl>
//         <FormControl mt={4}>
//           <FormLabel>Status</FormLabel>
//           <Input value={status} onChange={(e) => setStatus(e.target.value)} />
//         </FormControl>
//         <Button colorScheme="blue" mt={4} type="submit">
//           Edit Task
//         </Button>
//       </form>
//     </Box>
//   );
// };

// export default TaskEditForm;











// import React, { useState } from 'react';
// import { Box, Button, FormControl, FormLabel, Input, Textarea } from '@chakra-ui/react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';


// const TaskEditForm = ({ onTaskEdit, isOpen, onClose, task, onUpdate }) => {
//   const [title, setTitle] = useState(task.title);
//    const [description, setDescription] = useState(task.description);
//   const [status, setStatus] = useState('TODO');
//   const task_id = task.id;
//   const navigate = useNavigate();


//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       console.log("editing task with title: ", title, description);
//       // const myVariable = task.id;


//       const response = await axios.post(`/api/tasks/createNewTask`, { title, description, status, task_id});
//       console.log("Update response:", response.data);
//       //onUpdate(response.data);
//       navigate('/');

//       // onClose();
      
//     } catch (error) {
//       console.error('Failed to update task', error);
//     }
    
//   };

//   return (
//     <Box mb={8}>
//       <form onSubmit={handleSubmit}>
//         <FormControl>
//           <FormLabel>Title</FormLabel>
//           <Input value={title} onChange={(e) => setTitle(e.target.value)} />
//         </FormControl>
//         <FormControl mt={4}>
//           <FormLabel>Description</FormLabel>
//           <Textarea value={description} onChange={(e) => setDescription(e.target.value)} />
//         </FormControl>
//         <FormControl mt={4}>
//           <FormLabel>Status</FormLabel>
//           <Input value={status} onChange={(e) => setStatus(e.target.value)} />
//         </FormControl>
//         <Button colorScheme="blue" mt={4} type="submit" onClick={handleSubmit}>
//           Edit Task
//         </Button>
//         <Button variant="ghost" onClick={onClose}>Cancel</Button>
//       </form>
//     </Box>
//   );
// };

// export default TaskEditForm;

















// 













import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, Textarea,Select } from '@chakra-ui/react';
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
        <Button colorScheme="blue" mt={4} type="submit" onClick={handleSubmit}>
          Edit Task
        </Button>
        <Button variant="ghost" onClick={handleCancel}>Cancel</Button>
      </form>
    </Box>
  );
};

export default TaskEditForm;













































