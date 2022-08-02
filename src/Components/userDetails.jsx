import React from 'react';
import { Box, Flex, Avatar, Text } from '@chakra-ui/react';

const UserDetails = e => {
  return (
    <Box w="300px" ml={5}>
      <Flex>
        <Avatar src={e.image} size="lg" />
        <Box textAlign="left" ml={6} mt={2}>
          <Text fontSize="18px">{e.name}</Text>
          <Text fontSize="12px">{e.email}</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default UserDetails;
