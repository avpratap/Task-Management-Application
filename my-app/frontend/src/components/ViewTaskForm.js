// import React, { useState } from 'react';
// import { Box, Button, FormControl, FormLabel, Input, Textarea } from '@chakra-ui/react';
// import axios from 'axios';

// const ViewTaskForm = ({ onTaskView}) => {
//   const [title, setTitle] = useState('task.title');
//   const [description, setDescription] = useState('task.description');
//   const [status, setStatus] = useState('task.status');
// //   const task_id = task.id;
// ;

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       console.log("tried to create a new task");
//       const task_id = null;

//       const response = await axios.post('/api/tasks/editTask', { title, description, status, task_id });
//       onTaskView(response.data);
//       setTitle('');
//       setDescription('');
//       setStatus('');
      
//     } catch (error) {
//       console.error('Failed to create task', error);
//     }
//   };

//   return (
//     <Box mb={8} isOpen>
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
//         <Button variant="ghost" type="submit">Cancel</Button>
//       </form>
//     </Box>
//   );
// };

// export default ViewTaskForm;









import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, Textarea,  } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';


const ViewTaskForm = ({ onTaskView, task, onClose} ) => {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [status, setStatus] = useState(task.status);
  const navigate = useNavigate();


//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//     //   console.log("tried to create a new task");
//       const task_id = null;

//       const response = await axios.post('/api/tasks/editTask', { title, description, status, task_id });
//       onTaskView(response.data);
//       setTitle('');
//       setDescription('');
//       setStatus('TODO');
      
//     } catch (error) {
//       console.error('Failed to load task...', error);
//     }
//   };

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
          {/* <Select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="TODO">TODO</option>
            <option value="IN PROGRESS">IN PROGRESS</option>
            <option value="DONE">DONE</option>
          </Select> */}
        </FormControl>
        <Button colorScheme="blue" mt={4} type="submit" onClick={handleSubmit} >
          Close
        </Button>
      </form>
    </Box>
  );
};

export default ViewTaskForm;
