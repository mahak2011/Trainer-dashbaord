import React from 'react';
import {
  ChakraProvider,
  Box,
  Flex,
  Heading,
  HStack,
  theme,
  Icon,
} from '@chakra-ui/react';
import AllDetails from './index';
import { IoMdWalk } from 'react-icons/io';
import { CgGym } from 'react-icons/cg';
import { BiDish } from 'react-icons/bi';

function Main() {
  return (
    <ChakraProvider theme={theme}>
      <Box p="3% 2.5%" bg="#1F2731" textAlign="center" h="100vh" w="100%">
        <Box
          bg="#101317"
          color="white"
          w="full"
          h="full"
          borderRadius="16px"
          m="auto"
          boxShadow="dark-lg"
        >
          <Flex justify="flex-end" pt={2}>
            <HStack mr="150px">
              <Icon as={IoMdWalk} boxSize="40px" />
              <Heading size="lg">Steps</Heading>
            </HStack>
            <HStack mr="150px">
              <Icon as={CgGym} boxSize="40px" />
              <Heading size="lg">Workout</Heading>
            </HStack>
            <HStack mr="200px">
              <Icon as={BiDish} boxSize="40px" />
              <Heading size="lg">Nutrition</Heading>
            </HStack>
          </Flex>
          <Box>
            <AllDetails />
          </Box>
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default Main;
