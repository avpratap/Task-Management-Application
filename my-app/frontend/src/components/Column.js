import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import { Droppable } from 'react-beautiful-dnd';
import Task from './Task';

const Column = ({ title, tasks }) => {
  return (
    <Droppable droppableId={title}>
      {(provided) => (
        <Box
          w="30%"
          p={4}
          bg="blue.50"
          borderRadius="md"
          {...provided.droppableProps}
          ref={provided.innerRef}
        >
          <Heading size="md" mb={4} textAlign="center">{title}</Heading>
          {tasks.map((task, index) => (
            <Task key={task.id} task={task} index={index} />
          ))}
          {provided.placeholder}
        </Box>
      )}
    </Droppable>
  );
};

export default Column;
