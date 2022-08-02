import React from 'react';
import { Box, Icon, HStack, IconButton, Heading } from '@chakra-ui/react';
import { FiUserCheck } from 'react-icons/fi';
import { TbCalendarTime } from 'react-icons/tb';
import { AiOutlineRight, AiOutlineExclamation } from 'react-icons/ai';

const Workout = e => {
  const setButtonIcon =
    e.feedback === true ? <AiOutlineExclamation /> : <AiOutlineRight />;
  const setButtonColor = e.feedback === true ? '#CC3838' : '#101317';
  return (
    <Box>
      <HStack spacing={3} ml="115px">
        <Box mr={3}>
          <HStack mb={6}>
            <Icon as={FiUserCheck} boxSize={7} />
            <Heading size="md">{e.performedDate}</Heading>
          </HStack>
          <HStack>
            <Icon as={TbCalendarTime} boxSize={7} />
            <Heading size="md">{e.scheduledDate}</Heading>
          </HStack>
        </Box>
        <IconButton
          h="90px"
          fontSize="22px"
          icon={setButtonIcon}
          bg={setButtonColor}
        />
      </HStack>
    </Box>
  );
};

export default Workout;
