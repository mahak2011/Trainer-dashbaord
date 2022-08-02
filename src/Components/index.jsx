import React from 'react';
import UserDetails from './userDetails';
import Steps from './Steps';
import Workout from './Workout';
import Nutrition from './Nutrition';
import { Box, HStack, IconButton } from '@chakra-ui/react';
import Dummy from '../data.js';
import { AiOutlineBell } from 'react-icons/ai';
// import date from 'date-and-time';

const AllDetails = () => {
  return (
    <>
      {Dummy.map((e, i) => {
        return (
          <Box mt="22px" ml="20px" mr="20px" bg="#1E262F" borderRadius="10px">
            <HStack spacing={10}>
              <UserDetails {...e} />
              <Steps {...e} />
              <Workout {...e} />
              <Nutrition {...e} />
              <Box pl="35px">
                <IconButton
                  bg="#36F5C7"
                  color="#000000"
                  fontSize="40px"
                  h="60px"
                  w="60px"
                  icon={<AiOutlineBell />}
                />
              </Box>
            </HStack>
          </Box>
        );
      })}
    </>
  );
};

export default AllDetails;
