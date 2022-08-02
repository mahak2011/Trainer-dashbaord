import { useState } from 'react';
import {
  Box,
  Text,
  CircularProgress,
  CircularProgressLabel,
  VStack,
  HStack,
  Button,
  Heading,
} from '@chakra-ui/react';
import millify from 'millify';

const Steps = e => {
  const [target, setTarget] = useState(4000);
  return (
    <Box>
      <HStack ml="95px">
        <CircularProgress
          max={target}
          value={e.stepsWalked}
          size="110px"
          thickness="6px"
          color="#7FD18C"
        >
          <CircularProgressLabel>
            <Text fontSize="16px">{`${e.stepsWalked}`}</Text>
            <Text fontSize="10px">Walked</Text>
          </CircularProgressLabel>
        </CircularProgress>
        <VStack>
          <Button
            bg="#101317"
            w="30px"
            h="18px"
            borderRadius="4px"
            onClick={() => {
              setTarget(target + 500);
            }}
          >
            +
          </Button>
          <Heading size="md">{millify(target)}</Heading>
          <Text fontSize="12px">target</Text>
          <Button
            bg="#101317"
            w="30px"
            h="18px"
            borderRadius="4px"
            onClick={() => {
              setTarget(target - 500);
            }}
          >
            -
          </Button>
        </VStack>
      </HStack>
    </Box>
  );
};

export default Steps;
