import React from 'react';
import { Box, Button, Flex, Spacer, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <Flex as="nav" bg="blue.500" p={4} color="white">
      {/* <Box>
        <Link as={RouterLink} to="/dashboard" p={2}>Dashboard</Link>
      </Box> */}

<Box
      p={4}
      bg="white"
      borderRadius="md"
      boxShadow="md"
      _hover={{ bg: 'gray.100', boxShadow: 'lg' }}
      transition="all 0.3s ease"
    >
      <Link
        as={RouterLink}
        to="/dashboard"
        p={2}
        fontSize="xl"
        fontWeight="bold"
        color="blue.500"
        _hover={{ textDecoration: 'underline', color: 'blue.700' }}
        _active={{ color: 'blue.800' }}
        _focus={{ boxShadow: 'outline' }}
      >
        Task-Management-Application
      </Link>
    </Box>
      <Spacer />
      {isAuthenticated ? (
        <Button onClick={logout} colorScheme="red">Logout</Button>
      ) : (
        <>
          <Link as={RouterLink} to="/login" p={2}>Login</Link>
          <Link as={RouterLink} to="/signup" p={2}>Signup</Link>
        </>
      )}
    </Flex>
  );
};

export default Navbar;
