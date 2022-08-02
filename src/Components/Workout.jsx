import React from 'react';
import { Box, Icon, HStack, IconButton, Heading } from '@chakra-ui/react';
import { FiUserCheck } from 'react-icons/fi';
import { TbCalendarTime } from 'react-icons/tb';
import { AiOutlineRight, AiOutlineExclamation } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import moment from 'moment';

const Workout = e => {
  const setButtonIcon =
    e.feedback === true ? <AiOutlineExclamation /> : <AiOutlineRight />;

  const setButtonColor = e.feedback === true ? '#CC3838' : '#101317';

  const today = moment().format('DD MMM');

  return (
    <Box w="300px">
      <HStack spacing={3} ml="100px">
        <Box mr={3} w="120px">
          <HStack mb={4} p={1}>
            <Icon as={FiUserCheck} boxSize={7} />
            <Heading size="md">{e.performedDate}</Heading>
          </HStack>
          <HStack
            bg={today === e.scheduledDate && '#CC3838'}
            p={1}
            borderRadius="8px"
          >
            <Icon as={TbCalendarTime} boxSize={7} />
            <Heading size="md">{e.scheduledDate}</Heading>
          </HStack>
        </Box>
        <Link to={`${e.userId}/workout`}>
          <IconButton
            h="90px"
            fontSize="22px"
            icon={setButtonIcon}
            bg={setButtonColor}
          />
        </Link>
      </HStack>
    </Box>
  );
};

export default Workout;
