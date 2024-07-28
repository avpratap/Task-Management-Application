// import React, { useState } from 'react';
// import { Box, Button, FormControl, FormLabel, Input, Textarea } from '@chakra-ui/react';
// import axios from 'axios';

// const NewTaskForm = ({ onTaskCreated }) => {
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [status, setStatus] = useState('TODO');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       console.log("tried to create a new task");
//       const task_id = null;

//       const response = await axios.post('/api/tasks/createNewTask', { title, description, status, task_id });
//       onTaskCreated(response.data);
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
//           Add Task
//         </Button>
//       </form>
//     </Box>
//   );
// };

// export default NewTaskForm;




import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, Textarea, Select } from '@chakra-ui/react';
import axios from 'axios';

const NewTaskForm = ({ onTaskCreated }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('TODO');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("tried to create a new task");
      const task_id = null;

      const response = await axios.post('/api/tasks/createNewTask', { title, description, status, task_id });
      onTaskCreated(response.data);
      setTitle('');
      setDescription('');
      setStatus('TODO');
      
    } catch (error) {
      console.error('Failed to create task', error);
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
        <Button colorScheme="blue" mt={4} type="submit">
          Add Task
        </Button>
      </form>
    </Box>
  );
};

export default NewTaskForm;
